import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Hammer, Copy, Check, ArrowRight, Github, Terminal } from "lucide-react";
import { SectionHeader } from "./FeatureGrid";
import { useLang } from "../i18n/LanguageContext";

const easeOut = [0.2, 0.7, 0.2, 1];

const GH_RELEASE = "https://github.com/lizzary/Artifex/releases/latest";
const GH_REPO = "https://github.com/lizzary/Artifex";

const SOURCE_CMD = `git clone https://github.com/lizzary/Artifex.git
cd Artifex/frontend && npm install && npm run build
cd ../backend-go && build.bat build
.\\artifex-server.exe`;

export default function QuickStart() {
    const { s } = useLang();
    const [tab, setTab] = useState("release");
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(SOURCE_CMD);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { /* noop */ }
    };

    return (
        <section id="quickstart" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow={s.quickstart.eyebrow}
                    align="center"
                    title={
                        <>
                            {s.quickstart.titlePrefix}
                            <span className="text-gradient">{s.quickstart.titleAccent}</span>
                            {s.quickstart.titleSuffix}
                        </>
                    }
                    sub={s.quickstart.subtitle}
                />

                {/* Tabs */}
                <div className="mt-10 flex items-center justify-center gap-2">
                    <TabPill active={tab === "release"} onClick={() => setTab("release")} icon={Download}>
                        {s.quickstart.tabRelease}
                    </TabPill>
                    <TabPill active={tab === "source"} onClick={() => setTab("source")} icon={Hammer}>
                        {s.quickstart.tabSource}
                    </TabPill>
                </div>

                <div className="mt-10">
                    {tab === "release" ? (
                        <ReleasePanel data={s.quickstart.release} />
                    ) : (
                        <SourcePanel
                            copied={copied}
                            onCopy={copy}
                            cmd={SOURCE_CMD}
                            data={s.quickstart.source}
                        />
                    )}
                </div>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <a
                        href={GH_RELEASE}
                        target="_blank" rel="noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-ink-950 bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 shadow-glow-violet hover:shadow-glow-cyan transition-shadow overflow-hidden no-tap-highlight"
                    >
                        <Download size={18} />
                        {s.quickstart.ctaRelease}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        <span className="shimmer-overlay" />
                    </a>
                    <a
                        href={GH_REPO}
                        target="_blank" rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-medium text-white/90 glass border-gradient hover:bg-white/[0.07] transition-colors no-tap-highlight"
                    >
                        <Github size={18} />
                        {s.quickstart.ctaGithub}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function TabPill({ active, onClick, icon: Icon, children }) {
    return (
        <button
            onClick={onClick}
            className={`no-tap-highlight inline-flex items-center gap-2 rounded-full text-sm px-4 py-2 transition-all border ${
                active
                    ? "text-white border-transparent bg-gradient-to-r from-violet-glow/25 to-cyan-glow/25 shadow-glow-violet"
                    : "text-white/55 border-white/10 hover:text-white hover:bg-white/5"
            }`}
        >
            <Icon size={15} /> {children}
        </button>
    );
}

function ReleasePanel({ data }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
            {data.steps.map((step, i) => (
                <div key={step.n} className="relative rounded-2xl glass border-gradient p-5 card-lift hover:shadow-glow-violet">
                    <div className="font-mono text-xs text-white/40">{data.stepLabel}</div>
                    <div className="mt-1 font-display text-4xl text-gradient leading-none">{step.n}</div>
                    <div className="mt-4 text-white/90 font-medium">{step.title}</div>
                    <div className="mt-1.5 text-sm text-white/60 leading-relaxed">
                        {step.descNode ? (
                            <>
                                {step.descNode[0]}
                                <span className="font-mono text-violet-soft">{step.descNode[1]}</span>
                                {step.descNode[2]}
                            </>
                        ) : step.desc}
                    </div>
                    {i < data.steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/15">
                            <ArrowRight size={20} />
                        </div>
                    )}
                </div>
            ))}
        </motion.div>
    );
}

function SourcePanel({ copied, onCopy, cmd, data }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="grid lg:grid-cols-12 gap-5"
        >
            <div className="lg:col-span-5 rounded-2xl glass border-gradient p-5">
                <div className="text-xs uppercase tracking-widest text-violet-soft/80">{data.reqsLabel}</div>
                <ul className="mt-4 divide-y divide-white/5">
                    {data.reqs.map((r) => (
                        <li key={r.k} className="flex items-center justify-between py-3">
                            <span className="text-white/85">{r.k}</span>
                            <span className="font-mono text-sm text-white/65">{r.v}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:col-span-7 rounded-2xl glass-strong border-gradient overflow-hidden shadow-panel">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-xs text-white/55 font-mono">
                        <Terminal size={14} />
                        <span>{data.terminalLabel}</span>
                    </div>
                    <button
                        onClick={onCopy}
                        className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 no-tap-highlight transition-colors"
                    >
                        {copied ? <Check size={13} /> : <Copy size={13} />}
                        {copied ? data.copied : data.copy}
                    </button>
                </div>
                <pre className="p-5 text-[13px] leading-relaxed font-mono text-white/85 overflow-x-auto">{cmd.split("\n").map((ln, i) => (
                    <div key={i} className="whitespace-pre">
                        <span className="text-white/30 select-none mr-3">$</span>
                        <span dangerouslySetInnerHTML={{ __html: highlight(ln) }} />
                    </div>
                ))}</pre>
            </div>
        </motion.div>
    );
}

function highlight(line) {
    return line
        .replace(/(git|cd|npm|build\.bat|\.\\\S+\.exe)/g, '<span class="text-violet-soft">$1</span>')
        .replace(/(install|build|run|clone)/g, '<span class="text-cyan-soft">$1</span>')
        .replace(/(\b[a-z]+:\/\/[^\s]+)/g, '<span class="text-amber-300">$1</span>');
}
