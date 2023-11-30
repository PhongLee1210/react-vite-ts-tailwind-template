import { defineConfig, loadEnv } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

import react from '@vitejs/plugin-react';

import { fileURLToPath, URL } from 'url';

export default defineConfig(({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return {
    plugins: [react(), eslintPlugin()],
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@constants': fileURLToPath(new URL('./src/shared/constants', import.meta.url)),
        '@enums': fileURLToPath(new URL('./src/shared/enums', import.meta.url)),
        '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
        '@layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
        '@locales': fileURLToPath(new URL('./src/locales', import.meta.url)),
        '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
        '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
        '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@tests': fileURLToPath(new URL('./src/tests', import.meta.url)),
        '@types': fileURLToPath(new URL('./src/@types', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/shared/utils', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      port: Number(process.env.VITE_APP_PORT),
    },

    build: {
      emptyOutDir: true,
      chunkSizeWarningLimit: 1600,
      commonjsOptions: {
        include: [/react/, /node_modules/],
      },
      minify: mode === 'development',
      sourcemap: mode === 'development',
      cssCodeSplit: mode !== 'development',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },

          inlineDynamicImports: false,
        },
        treeshake: true,
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});

// https://vitejs.dev/config/
