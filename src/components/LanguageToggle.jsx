import React from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function LanguageToggle({ compact = false }) {
    const { lang, setLang, langs, s } = useLang();

    return (
        <div
            role="group"
            aria-label={s.common.languageLabel}
            className={`relative inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-1 ${
                compact ? "" : ""
            }`}
        >
            {!compact && (
                <span className="px-1 text-white/55">
                    <Languages size={14} />
                </span>
            )}
            {langs.map((l) => {
                const isActive = lang === l.code;
                return (
                    <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        aria-pressed={isActive}
                        className={`relative no-tap-highlight rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                            isActive ? "text-ink-950" : "text-white/65 hover:text-white"
                        }`}
                    >
                        {isActive && (
                            <motion.span
                                layoutId="lang-toggle-pill"
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 shadow-glow-violet"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                        )}
                        <span className="relative">{l.short}</span>
                    </button>
                );
            })}
        </div>
    );
}
