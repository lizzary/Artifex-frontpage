import React from "react";
import { motion } from "framer-motion";
import {
    Download,
    Github,
    Sparkles,
    Star,
    ShieldCheck,
    Cpu,
} from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const GH_RELEASE = "https://github.com/lizzary/Artifex/releases/latest";
const GH_REPO = "https://github.com/lizzary/Artifex";

const easeOut = [0.2, 0.7, 0.2, 1];

export default function Hero() {
    const { s } = useLang();
    return (
        <section
            id="top"
            className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* Left: copy + CTAs */}
                    <div className="lg:col-span-7 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeOut }}
                            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-white/80 mb-6"
                        >
                            <Sparkles size={14} className="text-amber-300" />
                            <span>{s.hero.badge}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
                            className="font-display leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem]"
                        >
                            <span className="block text-white/90">{s.hero.line1}</span>
                            <span className="block">
                                <span className="text-gradient">{s.hero.line2Accent}</span>
                            </span>
                            <span className="block text-white/95">
                                {s.hero.line3}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
                            className="mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed"
                        >
                            {s.hero.subtitle}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
                            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <a
                                href={GH_RELEASE}
                                target="_blank" rel="noreferrer"
                                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-ink-950 bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 shadow-glow-violet hover:shadow-glow-cyan transition-shadow overflow-hidden no-tap-highlight"
                            >
                                <Download size={18} />
                                <span>{s.hero.ctaDownload}</span>
                                <span className="text-ink-950/60 text-xs ml-1 hidden sm:inline">
                                    {s.hero.ctaDownloadSub}
                                </span>
                                <span className="shimmer-overlay" />
                            </a>
                            <a
                                href={GH_REPO}
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-white/90 glass border-gradient hover:bg-white/[0.07] transition-colors no-tap-highlight"
                            >
                                <Github size={18} />
                                <span>{s.hero.ctaGithub}</span>
                            </a>
                        </motion.div>

                        {/* Trust strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.45 }}
                            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/55"
                        >
                            <span className="inline-flex items-center gap-1.5">
                                <ShieldCheck size={14} className="text-emerald-300/90" /> {s.hero.trust.mit}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Cpu size={14} className="text-cyan-glow" /> {s.hero.trust.gpu}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Star size={14} className="text-amber-300" /> {s.hero.trust.portable}
                            </span>
                        </motion.div>
                    </div>

                    {/* Right: stacked preview cards */}
                    <div className="lg:col-span-5 relative">
                        <HeroPreview metadataChip={s.hero.metadataChip} />
                    </div>
                </div>
            </div>

            {/* Bottom marquee — feature keywords */}
            <div className="mt-16 sm:mt-24 relative">
                <Marquee items={s.hero.marquee} />
            </div>
        </section>
    );
}

function HeroPreview({ metadataChip }) {
    return (
        <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
            {/* glow halo */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 m-auto h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-violet-glow/30 blur-3xl animate-pulse-soft" />
                <div className="absolute right-4 top-10 h-40 w-40 rounded-full bg-cyan-glow/25 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* Back card — gallery thumbnail strip */}
            <motion.div
                initial={{ opacity: 0, y: 24, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
                className="absolute left-2 sm:left-6 top-6 w-[78%] sm:w-[68%] aspect-[16/10] rounded-2xl overflow-hidden glass shadow-panel border-gradient animate-float-slower"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/screenshots/color_groups1.png`}
                    alt="Color grouping view"
                    className="w-full h-full object-cover object-center opacity-95"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/70 via-transparent to-violet-glow/10" />
            </motion.div>

            {/* Front card — wide screenshot (color_groups2 is 2.0 ratio, looks best here) */}
            <motion.div
                initial={{ opacity: 0, y: 32, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 2 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.05 }}
                className="absolute right-0 sm:right-2 bottom-0 w-[88%] sm:w-[80%] aspect-[16/10] rounded-2xl overflow-hidden glass-strong shadow-panel border-gradient animate-float-slow"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/screenshots/color_groups2.png`}
                    alt="Artifex color groups"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/40 via-transparent to-cyan-glow/10" />

                {/* simulated chrome dots */}
                <div className="absolute top-2.5 left-3 flex gap-1.5 opacity-80">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
            </motion.div>

            {/* Floating chip — metadata snippet */}
            <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
                className="hidden sm:block absolute -top-2 right-6 rounded-xl glass-strong shadow-glow-violet px-3.5 py-2 text-xs animate-float-slow"
            >
                <div className="flex items-center gap-2 text-white/80">
                    <span className="inline-block h-2 w-2 rounded-full bg-violet-glow animate-pulse-soft" />
                    <span className="font-mono">{metadataChip}</span>
                </div>
            </motion.div>

            {/* Floating chip — tag pills */}
            <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.75, ease: easeOut }}
                className="hidden sm:flex absolute -bottom-3 left-6 rounded-xl glass-strong shadow-glow-cyan px-3 py-2 text-[11px] gap-1.5 animate-float-slower"
            >
                {["1girl", "long_hair", "twilight", "scenery"].map((t) => (
                    <span
                        key={t}
                        className="rounded-md px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/80 font-mono"
                    >
                        {t}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

function Marquee({ items }) {
    const row = [...items, ...items];
    return (
        <div className="relative mask-fade-x py-3 border-y border-white/5">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
                {row.map((t, i) => (
                    <span
                        key={i}
                        className="text-white/35 text-xs sm:text-sm tracking-widest uppercase font-mono"
                    >
                        <span className="text-violet-soft/70">◆</span>&nbsp;&nbsp;{t}
                    </span>
                ))}
            </div>
        </div>
    );
}
