// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      port: 3000,
    },
    plugins: [],
    publicDir: "./public/images",
  },

  adapter: vercel(),
});
