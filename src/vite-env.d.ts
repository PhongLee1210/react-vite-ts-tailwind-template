/// <reference types=".@types/vite-import-override.d.ts" />
/// <reference types="vite/client" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_APP_PORT: string;
  readonly VITE_I18N_LOCALE: string;
  readonly VITE_I18N_FALLBACK_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
