# Guided install guide (store operator)

Goal: connect **Shopify → Cursor** via a local MCP server so the operator can query orders/customers/products inside Cursor.

## 0) Scope (v1)

- Read-only tools only.
- No refunds, no product edits, no customer tag writes.

This keeps it safe and keeps the “€2k or free” guarantee from turning into an open-ended build.

## 1) Create Shopify Admin API access token

In Shopify Admin:

- Go to Apps → App and sales channel settings (or developer apps)
- Create an app
- Configure Admin API scopes (start with read-only)
- Install the app
- Copy the Admin API access token

You will also need the store domain: `your-store.myshopify.com`

## 2) Install Node.js

- Install Node.js 20 LTS (preferred) or Node 18+

## 3) Run the MCP server

In a terminal, in this project folder:

```bash
npm install
npm run build
```

Then run with environment variables (example):

```bash
SHOPIFY_STORE_DOMAIN="my-store.myshopify.com" \
SHOPIFY_ADMIN_ACCESS_TOKEN="shpat_***" \
SHOPIFY_API_VERSION="2025-01" \
npm run start
```

## 4) Add to Cursor as an MCP server

In Cursor, add an MCP server that runs:

- command: `node`
- args: `dist/index.js`
- env: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_ADMIN_ACCESS_TOKEN`, `SHOPIFY_API_VERSION`

## 5) Run acceptance tests

Use `docs/acceptance-checklist.md`.

