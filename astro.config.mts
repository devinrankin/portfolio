// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  vite: {
    plugins: [tailwindcss()],
  
  }
});