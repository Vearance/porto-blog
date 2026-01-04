// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), mdx()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@public': path.resolve('./public')
      }
    }
  }
});