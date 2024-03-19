import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sebas0811buitrago.github.io",
  base: "./blog-sebaste",
  integrations: [mdx(), sitemap(), react()]
});