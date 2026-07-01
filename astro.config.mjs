import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://taxbon.com',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  output: 'static',          // 순수 정적 빌드 → dist/
  build: {
    assets: '_assets',       // JS/CSS 번들 폴더명
  },
});