import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: string): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguage(currentLang: string): string {
  return currentLang === 'es' ? 'en' : 'es';
}

export function getTranslatedPath(currentPath: string, targetLang: string): string {
  if (targetLang === 'es') {
    // Remove /en prefix
    return currentPath.replace(/^\/en/, '') || '/';
  } else {
    // Add /en prefix
    return currentPath === '/' ? '/en' : `/en${currentPath}`;
  }
}
