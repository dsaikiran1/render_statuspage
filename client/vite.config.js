import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // You can change this to any preferred port
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend API server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
