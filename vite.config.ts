/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    open:true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});