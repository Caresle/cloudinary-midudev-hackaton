// @ts-check
import { defineConfig } from "astro/config";

// import db from "@astrojs/db";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // db(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  output: "server",

  experimental: {
    serverIslands: true,
  },

  adapter: vercel(),
});