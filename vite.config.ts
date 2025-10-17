
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';

// ESM-safe __dirname for type: module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'vaul@1.1.2', replacement: 'vaul' },
      { find: 'sonner@2.0.3', replacement: 'sonner' },
      { find: 'recharts@2.15.2', replacement: 'recharts' },
      { find: 'react-resizable-panels@2.1.7', replacement: 'react-resizable-panels' },
      { find: 'react-hook-form@7.55.0', replacement: 'react-hook-form' },
      { find: 'react-day-picker@8.10.1', replacement: 'react-day-picker' },
      { find: 'next-themes@0.4.6', replacement: 'next-themes' },
      { find: 'lucide-react@0.487.0', replacement: 'lucide-react' },
      { find: 'input-otp@1.4.2', replacement: 'input-otp' },
      { find: 'embla-carousel-react@8.6.0', replacement: 'embla-carousel-react' },
      { find: 'cmdk@1.1.1', replacement: 'cmdk' },
      { find: 'class-variance-authority@0.7.1', replacement: 'class-variance-authority' },
      { find: '@radix-ui/react-tooltip@1.1.8', replacement: '@radix-ui/react-tooltip' },
      { find: '@radix-ui/react-toggle@1.1.2', replacement: '@radix-ui/react-toggle' },
      { find: '@radix-ui/react-toggle-group@1.1.2', replacement: '@radix-ui/react-toggle-group' },
      { find: '@radix-ui/react-tabs@1.1.3', replacement: '@radix-ui/react-tabs' },
      { find: '@radix-ui/react-switch@1.1.3', replacement: '@radix-ui/react-switch' },
      { find: '@radix-ui/react-slot@1.1.2', replacement: '@radix-ui/react-slot' },
      { find: '@radix-ui/react-slider@1.2.3', replacement: '@radix-ui/react-slider' },
      { find: '@radix-ui/react-separator@1.1.2', replacement: '@radix-ui/react-separator' },
      { find: '@radix-ui/react-select@2.1.6', replacement: '@radix-ui/react-select' },
      { find: '@radix-ui/react-scroll-area@1.2.3', replacement: '@radix-ui/react-scroll-area' },
      { find: '@radix-ui/react-radio-group@1.2.3', replacement: '@radix-ui/react-radio-group' },
      { find: '@radix-ui/react-progress@1.1.2', replacement: '@radix-ui/react-progress' },
      { find: '@radix-ui/react-popover@1.1.6', replacement: '@radix-ui/react-popover' },
      { find: '@radix-ui/react-navigation-menu@1.2.5', replacement: '@radix-ui/react-navigation-menu' },
      { find: '@radix-ui/react-menubar@1.1.6', replacement: '@radix-ui/react-menubar' },
      { find: '@radix-ui/react-label@2.1.2', replacement: '@radix-ui/react-label' },
      { find: '@radix-ui/react-hover-card@1.1.6', replacement: '@radix-ui/react-hover-card' },
      { find: '@radix-ui/react-dropdown-menu@2.1.6', replacement: '@radix-ui/react-dropdown-menu' },
      { find: '@radix-ui/react-dialog@1.1.6', replacement: '@radix-ui/react-dialog' },
      { find: '@radix-ui/react-context-menu@2.2.6', replacement: '@radix-ui/react-context-menu' },
      { find: '@radix-ui/react-collapsible@1.1.3', replacement: '@radix-ui/react-collapsible' },
      { find: '@radix-ui/react-checkbox@1.1.4', replacement: '@radix-ui/react-checkbox' },
      { find: '@radix-ui/react-avatar@1.1.3', replacement: '@radix-ui/react-avatar' },
      { find: '@radix-ui/react-aspect-ratio@1.1.2', replacement: '@radix-ui/react-aspect-ratio' },
      { find: '@radix-ui/react-alert-dialog@1.1.6', replacement: '@radix-ui/react-alert-dialog' },
      { find: '@radix-ui/react-accordion@1.2.3', replacement: '@radix-ui/react-accordion' },
    ],
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
});