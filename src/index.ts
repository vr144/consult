import "dotenv/config";
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ShopifyAdminClient, loadShopifyEnv } from "./shopifyAdmin.js";

const env = loadShopifyEnv(process.env);
const shopify = new ShopifyAdminClient(env);

const server = new McpServer({
  name: "shopify-ops",
  version: "0.1.0"
});

server.tool(
  "shopify_get_order",
  "Fetch a Shopify order by ID (GraphQL GID or numeric order ID). Read-only.",
  {
    orderId: z.string().min(1).describe("Either numeric ID like '1234567890' or GID like 'gid://shopify/Order/123'")
  },
  async ({ orderId }) => {
    const gid = orderId.startsWith("gid://") ? orderId : `gid://shopify/Order/${orderId}`;
    const data = await shopify.graphql<{
      order: {
        id: string;
        name: string;
        createdAt: string;
        displayFinancialStatus: string;
        displayFulfillmentStatus: string;
        email: string | null;
        totalPriceSet: { shopMoney: { amount: string; currencyCode: string } };
        customer: { id: string; displayName: string; email: string | null } | null;
        shippingAddress: { name: string | null; address1: string | null; city: string | null; zip: string | null; country: string | null } | null;
        lineItems: { edges: Array<{ node: { title: string; quantity: number } }> };
      } | null;
    }>(
      `
      query GetOrder($id: ID!) {
        order(id: $id) {
          id
          name
          createdAt
          displayFinancialStatus
          displayFulfillmentStatus
          email
          totalPriceSet { shopMoney { amount currencyCode } }
          customer { id displayName email }
          shippingAddress { name address1 city zip country }
          lineItems(first: 25) { edges { node { title quantity } } }
        }
      }
      `,
      { id: gid }
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data.order, null, 2)
        }
      ]
    };
  }
);

server.tool(
  "shopify_search_orders",
  "Search Shopify orders by query string (email, name, status). Read-only.",
  {
    query: z
      .string()
      .min(1)
      .describe("Shopify order search query (examples: 'email:someone@x.com', 'name:#1001', 'financial_status:paid')."),
    first: z.number().int().min(1).max(50).default(10)
  },
  async ({ query, first }) => {
    const data = await shopify.graphql<{
      orders: {
        edges: Array<{
          node: {
            id: string;
            name: string;
            createdAt: string;
            displayFinancialStatus: string;
            displayFulfillmentStatus: string;
            email: string | null;
            totalPriceSet: { shopMoney: { amount: string; currencyCode: string } };
          };
        }>;
      };
    }>(
      `
      query SearchOrders($q: String!, $first: Int!) {
        orders(first: $first, query: $q, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              name
              createdAt
              displayFinancialStatus
              displayFulfillmentStatus
              email
              totalPriceSet { shopMoney { amount currencyCode } }
            }
          }
        }
      }
      `,
      { q: query, first }
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            data.orders.edges.map((e) => e.node),
            null,
            2
          )
        }
      ]
    };
  }
);

server.tool(
  "shopify_get_customer",
  "Fetch a Shopify customer by email. Read-only.",
  {
    email: z.string().email()
  },
  async ({ email }) => {
    const data = await shopify.graphql<{
      customers: {
        edges: Array<{
          node: { id: string; displayName: string; email: string | null; phone: string | null; numberOfOrders: number; createdAt: string };
        }>;
      };
    }>(
      `
      query GetCustomerByEmail($q: String!) {
        customers(first: 5, query: $q) {
          edges { node { id displayName email phone numberOfOrders createdAt } }
        }
      }
      `,
      { q: `email:${email}` }
    );

    return {
      content: [{ type: "text", text: JSON.stringify(data.customers.edges.map((e) => e.node), null, 2) }]
    };
  }
);

server.tool(
  "shopify_search_customers",
  "Search Shopify customers by query string. Read-only.",
  {
    query: z.string().min(1).describe("Shopify customer search query (examples: 'email:someone@x.com', 'name:John', 'phone:+358')."),
    first: z.number().int().min(1).max(50).default(10)
  },
  async ({ query, first }) => {
    const data = await shopify.graphql<{
      customers: {
        edges: Array<{
          node: { id: string; displayName: string; email: string | null; phone: string | null; numberOfOrders: number; createdAt: string };
        }>;
      };
    }>(
      `
      query SearchCustomers($q: String!, $first: Int!) {
        customers(first: $first, query: $q) {
          edges { node { id displayName email phone numberOfOrders createdAt } }
        }
      }
      `,
      { q: query, first }
    );

    return {
      content: [{ type: "text", text: JSON.stringify(data.customers.edges.map((e) => e.node), null, 2) }]
    };
  }
);

server.tool(
  "shopify_list_products",
  "List products (first page). Read-only.",
  {
    first: z.number().int().min(1).max(50).default(10)
  },
  async ({ first }) => {
    const data = await shopify.graphql<{
      products: {
        edges: Array<{
          node: { id: string; title: string; status: string; vendor: string | null; totalInventory: number | null };
        }>;
      };
    }>(
      `
      query ListProducts($first: Int!) {
        products(first: $first, sortKey: UPDATED_AT, reverse: true) {
          edges { node { id title status vendor totalInventory } }
        }
      }
      `,
      { first }
    );

    return {
      content: [{ type: "text", text: JSON.stringify(data.products.edges.map((e) => e.node), null, 2) }]
    };
  }
);

server.tool(
  "shopify_get_inventory_levels",
  "Fetch inventory levels for inventory item IDs at locations. Read-only. (Requires you know inventoryItemIds).",
  {
    inventoryItemIds: z.array(z.string().min(1)).min(1).max(25).describe("GIDs like gid://shopify/InventoryItem/123"),
    firstLocations: z.number().int().min(1).max(20).default(10)
  },
  async ({ inventoryItemIds, firstLocations }) => {
    const data = await shopify.graphql<{
      nodes: Array<
        | {
            __typename: "InventoryItem";
            id: string;
            sku: string | null;
            tracked: boolean;
            inventoryLevels: {
              edges: Array<{
                node: {
                  available: number | null;
                  location: { id: string; name: string };
                };
              }>;
            };
          }
        | { __typename: string; id?: string }
        | null
      >;
    }>(
      `
      query InventoryLevels($ids: [ID!]!, $firstLocations: Int!) {
        nodes(ids: $ids) {
          __typename
          ... on InventoryItem {
            id
            sku
            tracked
            inventoryLevels(first: $firstLocations) {
              edges {
                node {
                  available
                  location { id name }
                }
              }
            }
          }
        }
      }
      `,
      { ids: inventoryItemIds, firstLocations }
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data.nodes, null, 2)
        }
      ]
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // eslint-disable-next-line no-console
  console.log("shopify-ops MCP server running on stdio");
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

