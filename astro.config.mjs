// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // /blog (Spanish), /en/blog (English)
    },
  },

  vite: {
    server: {
      port: 3000,
    },
    plugins: [],
    publicDir: "./public/",
  },

  adapter: vercel(),
});
