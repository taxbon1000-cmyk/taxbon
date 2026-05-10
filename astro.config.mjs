import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  output: 'static',          // 순수 정적 빌드 → dist/
  build: {
    assets: '_assets',       // JS/CSS 번들 폴더명
  },
});
