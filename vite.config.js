import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { getAliases } from 'vite-aliases'
import ViteComponents from 'vite-plugin-components'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      directoryAsNamespace: true,
      customComponentResolvers: [console.log]
    }),
    Pages(),
    Layouts()
  ],
  resolve: {
    alias: getAliases()
  },
  server: {
    port: 80
  }
})
