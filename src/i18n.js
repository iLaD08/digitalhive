import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import english from "./locales/en/translation.json";
import french from "./locales/fr/translation.json";

const resources = {
  en: {
    translation: english
  },
  fr: {
    translation: french
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    // debug: true,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
