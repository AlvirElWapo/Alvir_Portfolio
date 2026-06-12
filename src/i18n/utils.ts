import { ui, defaultLang, type Lang } from "./ui";

/**
 * Derive the active language from the current URL.
 * Spanish lives at the root ("/") and English is mirrored under "/en/".
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function bound to a language.
 * Falls back to the default language (and finally the key itself)
 * when a string is missing so the build never breaks on a typo.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? (key as string);
  };
}

/**
 * The opposite language — used by the ES | EN toggle.
 */
export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/**
 * Given the current pathname and language, return the equivalent path in the
 * other language. Spanish has no prefix; English is mirrored under "/en".
 */
export function getOppositePath(pathname: string, lang: Lang): string {
  if (lang === "es") {
    return pathname === "/" ? "/en/" : `/en${pathname}`;
  }
  const stripped = pathname.replace(/^\/en/, "");
  return stripped === "" ? "/" : stripped;
}
