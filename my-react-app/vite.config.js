import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-joseyawovi-reactapp-63jdj3romz3.ws-us120.gitpod.io"
    ]
  }
})
