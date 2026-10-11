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
})
