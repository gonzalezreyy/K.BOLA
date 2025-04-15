import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Analyze bundle size
  ],
  build: {
    target: 'es2015',
    minify: 'terser', // Minify output
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
    },
    assetsInlineLimit: 4096, // Inline small assets to reduce requests
  },
});
