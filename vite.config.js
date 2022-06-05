import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Use React plugin in all *.jsx and *.tsx files
    include: '**/*.{jsx,tsx}',
  })]
})
