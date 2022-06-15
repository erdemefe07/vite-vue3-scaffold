import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ViteAliases } from 'vite-aliases'
import ViteComponents from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      directoryAsNamespace: true,
      resolvers: [console.log]
    }),
    Pages(),
    Layouts(),
    ViteAliases()
  ],
  server: {
    port: 8080
  }
})
