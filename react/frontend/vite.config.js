import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // https://vitejs.dev/config/server-options.html#server-watch
  server: {
    // setting host to true is necessary to run inside docker
    host: true,
    port: 9000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
})
