import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true
  },
  experimental: {
    // @ts-ignore this only exists in rolldown-vite
    enableNativePlugin: true
  }
});