import React from "react";
import { motion } from "framer-motion";
import { Download, Github, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

const GH_RELEASE = "https://github.com/lizzary/Artifex/releases/latest";
const GH_REPO = "https://github.com/lizzary/Artifex";

export default function CTA() {
    const { s } = useLang();
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border-gradient glass-strong shadow-panel p-8 sm:p-14 text-center"
                >
                    {/* aurora glows inside the card */}
                    <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[120%] bg-gradient-to-r from-violet-glow/30 via-amber-300/15 to-cyan-glow/30 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40" />

                    <div className="relative">
                        <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-violet-soft/90">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-violet-soft to-transparent" />
                            {s.cta.eyebrow}
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-violet-soft to-transparent" />
                        </div>
                        <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight">
                            {s.cta.titlePrefix}
                            <span className="text-gradient">{s.cta.titleAccent}</span>
                            {s.cta.titleSuffix}
                        </h2>
                        <p className="mt-4 text-white/65 max-w-xl mx-auto">
                            {s.cta.subtitle}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <a
                                href={GH_RELEASE}
                                target="_blank" rel="noreferrer"
                                className="relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-ink-950 bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 shadow-glow-violet hover:shadow-glow-cyan transition-shadow overflow-hidden no-tap-highlight"
                            >
                                <Download size={18} />
                                {s.cta.download}
                                <span className="shimmer-overlay" />
                            </a>
                            <a
                                href={GH_REPO}
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-white/90 bg-white/[0.04] border border-white/10 hover:bg-white/10 transition-colors no-tap-highlight"
                            >
                                <Github size={18} />
                                {s.cta.github}
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
