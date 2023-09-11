import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production' ? 'https://thormengkheang.github.io/' : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});