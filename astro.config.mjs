import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://purpletheta.com',
  base: '/',
  integrations: [sitemap()],
});
