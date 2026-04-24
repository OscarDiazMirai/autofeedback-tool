import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
  typescript: { tsconfigPath: './tsconfig.app.json' },
  eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
