// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';
import remarkWikiLink from '@braindb/remark-wiki-link';

import tailwindcss from '@tailwindcss/vite';

function slugify(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

export default defineConfig({
  integrations: [],
  markdown: {
    remarkPlugins: [
      remarkBreaks, 
      [remarkWikiLink, 
        {
          pageResolver: (pageName: string) => [slugify(pageName)],
          hrefTemplate: (permalink: string) => `/b/${permalink}`,
        },
      ]
  ],
  },
  vite: {
    plugins: [tailwindcss()],
  }
});