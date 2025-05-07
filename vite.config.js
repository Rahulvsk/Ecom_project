import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto as crypto } from 'crypto'
globalThis.crypto = crypto

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Ecom_project",
})


