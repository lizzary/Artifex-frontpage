import React from "react";
import { motion } from "framer-motion";
import {
    Palette,
    Tags,
    Search,
    FileImage,
    Edit3,
    Images,
    MousePointerClick,
    Download,
    Sparkles,
} from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

// Visual metadata for each card — keyed by index to align with strings.features.items
const ICONS = [Palette, Tags, Search, FileImage, Edit3, Images, MousePointerClick, Download, Sparkles];
const ACCENTS = [
    "from-violet-glow/40 to-fuchsia-400/20",
    "from-cyan-glow/40 to-sky-400/20",
    "from-amber-300/40 to-orange-400/20",
    "from-emerald-300/40 to-teal-400/20",
    "from-pink-300/40 to-rose-400/20",
    "from-indigo-300/40 to-violet-400/20",
    "from-yellow-300/40 to-amber-400/20",
    "from-cyan-soft/40 to-blue-400/20",
    "from-violet-soft/40 to-purple-400/20",
];

const easeOut = [0.2, 0.7, 0.2, 1];

export default function FeatureGrid() {
    const { s } = useLang();
    return (
        <section id="features" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow={s.features.eyebrow}
                    title={
                        <>
                            {s.features.titlePrefix}
                            <span className="text-gradient">{s.features.titleAccent}</span>
                            {s.features.titleSuffix}
                        </>
                    }
                    sub={s.features.subtitle}
                />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {s.features.items.map((f, i) => {
                        const Icon = ICONS[i] || Sparkles;
                        const accent = ACCENTS[i] || ACCENTS[0];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, ease: easeOut, delay: (i % 3) * 0.06 }}
                                className="group relative rounded-2xl glass border-gradient p-5 sm:p-6 card-lift hover:shadow-glow-violet"
                            >
                                {/* accent corner gradient */}
                                <div className={`pointer-events-none absolute -top-px -right-px h-28 w-28 rounded-bl-[3rem] rounded-tr-2xl bg-gradient-to-br ${accent} opacity-50 blur-2xl group-hover:opacity-80 transition-opacity`} />

                                <div className="relative flex items-start gap-4">
                                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/5 border border-white/10 text-white shadow-inner">
                                        <Icon size={20} />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-display text-xl text-white/95">{f.title}</h3>
                                            {f.tag && (
                                                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-300/20 to-violet-glow/20 border border-amber-300/30 text-amber-100">
                                                    {f.tag}
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-2 text-sm text-white/65 leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function SectionHeader({ eyebrow, title, sub, align = "left" }) {
    return (
        <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}>
            {eyebrow && (
                <div className={`inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-violet-soft/80 ${align === "center" ? "justify-center" : ""}`}>
                    <span className="h-px w-6 bg-gradient-to-r from-transparent via-violet-soft to-transparent" />
                    {eyebrow}
                    <span className="h-px w-6 bg-gradient-to-r from-transparent via-violet-soft to-transparent" />
                </div>
            )}
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white/95">
                {title}
            </h2>
            {sub && <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed">{sub}</p>}
        </div>
    );
}
