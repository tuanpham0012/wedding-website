import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  publicDir: 'assets',
  server: {
    host: true, // cho phép truy cập từ mạng LAN
    port: 5173
  }
});
