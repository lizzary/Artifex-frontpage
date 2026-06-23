import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./FeatureGrid";
import { useLang } from "../i18n/LanguageContext";

// Tab key → screenshot (paths under /public)
const P = process.env.PUBLIC_URL;
const SCREENSHOTS = {
    groups:   `${P}/screenshots/color_groups2.png`,
    lightbox: `${P}/screenshots/lightbox_metadata.png`,
    search:   `${P}/screenshots/search_overlay.png`,
    tagedit:  `${P}/screenshots/lightbox_tag_edit.png`,
    tags:     `${P}/screenshots/tags_page.png`,
    batch:    `${P}/screenshots/batch_selection.png`,
};

const easeOut = [0.2, 0.7, 0.2, 1];

export default function ShowcaseGallery() {
    const { s } = useLang();
    const tabs = s.showcase.tabs;
    const [active, setActive] = useState(tabs[0].key);
    const current = tabs.find((t) => t.key === active) || tabs[0];
    const currentSrc = SCREENSHOTS[current.key];

    return (
        <section id="showcase" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow={s.showcase.eyebrow}
                    align="center"
                    title={
                        <>
                            {s.showcase.titlePrefix}
                            <span className="text-gradient">{s.showcase.titleAccent}</span>
                            {s.showcase.titleSuffix}
                        </>
                    }
                    sub={s.showcase.subtitle}
                />

                {/* Tabs */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                    {tabs.map((t) => {
                        const isActive = t.key === active;
                        return (
                            <button
                                key={t.key}
                                onClick={() => setActive(t.key)}
                                className={`no-tap-highlight relative rounded-full text-sm px-4 py-2 transition-all border ${
                                    isActive
                                        ? "text-white border-transparent bg-gradient-to-r from-violet-glow/20 to-cyan-glow/20 shadow-glow-violet"
                                        : "text-white/55 border-white/10 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {t.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="active-tab-ring"
                                        className="absolute inset-0 rounded-full border border-violet-soft/60 pointer-events-none"
                                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Stage */}
                <div className="mt-10 relative">
                    <div className="relative rounded-3xl overflow-hidden border-gradient glass shadow-panel">
                        {/* gradient corner glows */}
                        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-glow/25 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />

                        {/* fake browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                            </div>
                            <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] text-white/55 font-mono">
                                <span className="text-emerald-300">●</span>
                                127.0.0.1:8000 / {current.key}
                            </div>
                        </div>

                        {/* image stage: 16:9 frame, but image fits with object-contain + self-blur backdrop so nothing gets cropped */}
                        <div className="relative aspect-[16/9] bg-ink-950">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.key}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.45, ease: easeOut }}
                                    className="absolute inset-0"
                                >
                                    {/* Blurred backdrop using the same image — fills the frame without
                                        revealing letterbox bars and keeps the atmosphere consistent */}
                                    <img
                                        src={currentSrc}
                                        alt=""
                                        aria-hidden="true"
                                        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
                                        loading="lazy"
                                    />
                                    {/* Foreground: fully visible, never cropped */}
                                    <img
                                        src={currentSrc}
                                        alt={current.label}
                                        className="relative w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-4 right-4 text-xs sm:text-sm text-white/80">
                                <span className="text-violet-soft font-mono mr-2">{'//'}</span>
                                {current.caption}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbs row (mobile-friendly horizontal scroll) */}
                <div className="mt-6 mask-fade-x overflow-x-auto no-scrollbar">
                    <div className="flex gap-3 min-w-max px-1 pb-2">
                        {tabs.map((t) => (
                            <button
                                key={t.key}
                                onClick={() => setActive(t.key)}
                                className={`relative shrink-0 w-44 sm:w-52 aspect-[16/10] rounded-xl overflow-hidden border transition-all no-tap-highlight ${
                                    t.key === active
                                        ? "border-violet-soft/60 shadow-glow-violet"
                                        : "border-white/10 opacity-65 hover:opacity-100"
                                }`}
                            >
                                <img
                                    src={SCREENSHOTS[t.key]}
                                    alt=""
                                    className="w-full h-full object-cover object-center"
                                    loading="lazy"
                                />
                                <span className="absolute inset-x-0 bottom-0 px-2 py-1 text-[11px] bg-ink-950/85 text-white/90 text-left">
                                    {t.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
