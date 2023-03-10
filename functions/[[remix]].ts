import { createRequestHandler } from "@remix-run/cloudflare";
import * as build from "../build";
const { createStorefrontClient } = require("@shopify/hydrogen");

let remixHandler: ReturnType<typeof createRequestHandler>;

export const onRequest: PagesFunction<Env> = ({ request, env }) => {
  const { storefront } = createStorefrontClient({
    // buyerIp: getBuyerIp(request), probably: CF-Connecting-IP
    i18n: { language: "EN", country: "US" },
    publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
    storeDomain: `https://${env.PUBLIC_STORE_DOMAIN}`,
    storefrontApiVersion: env.PUBLIC_STOREFRONT_API_VERSION || "2023-01",
    storefrontId: env.PUBLIC_STOREFRONT_ID,
    // requestGroupId: req.headers.get('request-id'),
  });
  if (!remixHandler) {
    remixHandler = createRequestHandler(build, env.ENVIRONMENT);
  }
  // This is where you can pass a custom load context to your app
  return remixHandler(request, { storefront });
};
