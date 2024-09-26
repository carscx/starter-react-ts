import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      public: '/public',
      src: '/src',
      components: '/src/components',
      features: '/src/features',
      assets: '/src/assets',
      routes: '/src/routes',
      hooks: '/src/hooks',
      config: 'src/config',
      styles: 'src/styles',
      utils: '/src/utils',
    },
  },
})
