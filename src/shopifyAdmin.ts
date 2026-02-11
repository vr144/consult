import { z } from "zod";

const EnvSchema = z.object({
  SHOPIFY_STORE_DOMAIN: z.string().min(1),
  SHOPIFY_ADMIN_ACCESS_TOKEN: z.string().min(1),
  SHOPIFY_API_VERSION: z.string().min(1).default("2025-01")
});

export type ShopifyEnv = z.infer<typeof EnvSchema>;

export function loadShopifyEnv(env: NodeJS.ProcessEnv): ShopifyEnv {
  const parsed = EnvSchema.safeParse(env);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
    throw new Error(`Missing/invalid environment variables: ${issues}`);
  }
  return parsed.data;
}

type GraphQLResponse<T> =
  | { data: T; errors?: Array<{ message: string; extensions?: unknown }> }
  | { data?: T; errors: Array<{ message: string; extensions?: unknown }> };

export class ShopifyAdminClient {
  private readonly storeDomain: string;
  private readonly accessToken: string;
  private readonly apiVersion: string;

  constructor(env: ShopifyEnv) {
    this.storeDomain = env.SHOPIFY_STORE_DOMAIN;
    this.accessToken = env.SHOPIFY_ADMIN_ACCESS_TOKEN;
    this.apiVersion = env.SHOPIFY_API_VERSION;
  }

  async graphql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const url = `https://${this.storeDomain}/admin/api/${this.apiVersion}/graphql.json`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": this.accessToken
      },
      body: JSON.stringify({ query, variables })
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Shopify GraphQL HTTP ${res.status}: ${text.slice(0, 500)}`);
    }

    const json = (await res.json()) as GraphQLResponse<T>;
    if ("errors" in json && json.errors?.length) {
      throw new Error(`Shopify GraphQL error: ${json.errors.map((e) => e.message).join(" | ")}`);
    }
    if (!("data" in json) || !json.data) {
      throw new Error("Shopify GraphQL error: empty response");
    }
    return json.data;
  }
}

