import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./FeatureGrid";
import { useLang } from "../i18n/LanguageContext";

const easeOut = [0.2, 0.7, 0.2, 1];

export default function TechStack() {
    const { s } = useLang();
    return (
        <section id="stack" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-5">
                        <SectionHeader
                            eyebrow={s.stack.eyebrow}
                            title={
                                <>
                                    {s.stack.titlePrefix}
                                    <span className="text-gradient">{s.stack.titleAccent}</span>
                                    {s.stack.titleSuffix}
                                </>
                            }
                            sub={s.stack.subtitle}
                        />

                        <div className="mt-8 space-y-3">
                            {s.stack.kv.map((kv) => (
                                <KV key={kv.label} label={kv.label} value={kv.value} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative rounded-2xl glass border-gradient p-1 shadow-panel">
                            <div className="rounded-xl overflow-hidden">
                                {s.stack.rows.map((r, i) => (
                                    <motion.div
                                        key={r.layer}
                                        initial={{ opacity: 0, x: 12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.45, ease: easeOut, delay: i * 0.03 }}
                                        className={`grid grid-cols-12 gap-3 px-4 sm:px-5 py-3.5 text-sm ${
                                            i % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.005]"
                                        }`}
                                    >
                                        <div className="col-span-4 sm:col-span-3 font-mono text-violet-soft/90 truncate">
                                            {r.layer}
                                        </div>
                                        <div className="col-span-8 sm:col-span-9 text-white/75">
                                            {r.what}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KV({ label, value }) {
    return (
        <div className="flex items-center justify-between rounded-xl glass px-4 py-3">
            <span className="text-xs uppercase tracking-widest text-white/45">{label}</span>
            <span className="font-mono text-sm text-white/85">{value}</span>
        </div>
    );
}
