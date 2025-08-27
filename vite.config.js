import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change ONLY the base if deploying on GitHub Pages
// Example: if repo = portfolio_cleaned_with_vercel
// URL will be https://username.github.io/portfolio_cleaned_with_vercel/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/portfolio_cleaned_with_vercel/' : '/', 
})
