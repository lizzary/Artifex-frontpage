import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { STRINGS, LANGS } from "./strings";

const STORAGE_KEY = "artifex.lang";
const DEFAULT_LANG = "en";

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        if (typeof window === "undefined") return DEFAULT_LANG;
        const saved = window.localStorage?.getItem(STORAGE_KEY);
        if (saved && STRINGS[saved]) return saved;
        return DEFAULT_LANG;
    });

    const setLang = (next) => {
        if (!STRINGS[next]) return;
        setLangState(next);
        try { window.localStorage?.setItem(STORAGE_KEY, next); } catch { /* noop */ }
    };

    useEffect(() => {
        const htmlLang = lang === "zh" ? "zh-CN" : "en";
        document.documentElement.lang = htmlLang;
    }, [lang]);

    const value = useMemo(
        () => ({
            lang,
            setLang,
            s: STRINGS[lang] || STRINGS[DEFAULT_LANG],
            langs: LANGS,
        }),
        [lang]
    );

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) {
        // Provide a safe fallback so components don't crash if rendered without provider
        return { lang: DEFAULT_LANG, setLang: () => {}, s: STRINGS[DEFAULT_LANG], langs: LANGS };
    }
    return ctx;
}
