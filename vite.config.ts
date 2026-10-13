import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const [repositoryOwner, repositoryName] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
const isGitHubUserSite = repositoryName === `${repositoryOwner}.github.io`
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isGitHubUserSite
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('/node_modules/')) return

          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return 'react-vendor'
          }

          if (/\/node_modules\/(date-fns|react-day-picker)\//.test(id)) {
            return 'date-vendor'
          }

          if (id.includes('/node_modules/@radix-ui/')) {
            return 'radix-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
})
