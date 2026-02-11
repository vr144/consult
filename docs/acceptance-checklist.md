# Acceptance checklist (for “€2,000 or free if not installed”)

This document defines **what “installed” means** for the Shopify → Cursor MCP install.

## Preconditions (customer must provide)

- Admin access to the Shopify store
- Ability to create an Admin API access token
- A laptop where they can install Node.js 18+ (Node 20+ preferred)
- 90 minutes for a screenshare install + 30 minutes for acceptance testing

## Install steps (success criteria)

### 1) Credentials created
- Store domain is known (e.g. `my-store.myshopify.com`)
- Admin API access token is created and stored securely

### 2) MCP server runs locally
- Customer can run:
  - `npm install`
  - `npm run build`
  - `npm run start`
- MCP server starts without errors (stdio transport)

### 3) Cursor can call Shopify tools
From within Cursor, customer can successfully run:

- `shopify_search_orders` with `email:their-email@domain.com` (or another known order email) and get results
- `shopify_get_order` with a returned order ID and receive order JSON
- `shopify_get_customer` with a known email and receive customer JSON
- `shopify_search_customers` with `name:...` or `email:...` and get results
- `shopify_list_products` and get a list

### 4) Inventory tool (optional for v1 acceptance)
If the customer provides at least one `inventoryItemId` GID, then:

- `shopify_get_inventory_levels` returns inventory levels for locations

## Definition of “not installed”
If steps 1–3 cannot be completed due to the implementation (not customer preconditions), the install is considered **not installed**.

