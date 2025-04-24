import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  server: { port: 3000 },
  preview: { port: 3010 },
  css: { devSourcemap: true },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ① 절대경로 별칭
    },
  },
})
