import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@locales/lang/en.json';

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: import.meta.env.VITE_I18N_LOCALE,
  fallbackLng: import.meta.env.VITE_I18N_FALLBACK_LOCALE,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
