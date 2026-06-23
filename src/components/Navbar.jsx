import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "../i18n/LanguageContext";

const GH_RELEASE = "https://github.com/lizzary/Artifex/releases/latest";
const GH_REPO = "https://github.com/lizzary/Artifex";

export default function Navbar() {
    const { s } = useLang();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: s.nav.features,   href: "#features"   },
        { label: s.nav.showcase,   href: "#showcase"   },
        { label: s.nav.stack,      href: "#stack"      },
        { label: s.nav.quickstart, href: "#quickstart" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
                scrolled ? "py-2" : "py-4"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 transition-all duration-500 ${
                        scrolled
                            ? "glass-strong shadow-panel"
                            : "bg-transparent"
                    }`}
                >
                    {/* Brand */}
                    <a href="#top" className="flex items-center gap-2.5 group no-tap-highlight">
                        <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-violet-glow/25 to-cyan-glow/15 border border-white/5 shadow-glow-violet">
                            <Logo size={26} />
                        </span>
                        <span className="font-display text-2xl tracking-wide">
                            <span className="text-gradient">Artifex</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="link-underline hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <LanguageToggle />
                        <a
                            href={GH_REPO}
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors no-tap-highlight"
                        >
                            <Github size={16} /> {s.nav.github}
                        </a>
                        <a
                            href={GH_RELEASE}
                            target="_blank" rel="noreferrer"
                            className="relative inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium text-ink-950 bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 shadow-glow-violet hover:shadow-glow-cyan transition-shadow overflow-hidden no-tap-highlight"
                        >
                            <Download size={16} />
                            <span>{s.nav.download}</span>
                            <span className="shimmer-overlay" />
                        </a>
                    </div>

                    {/* Mobile right cluster */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageToggle compact />
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setOpen((v) => !v)}
                            className="grid place-items-center h-10 w-10 rounded-xl text-white/80 hover:text-white hover:bg-white/5 no-tap-highlight"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu panel */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22 }}
                            className="md:hidden mt-2 rounded-2xl glass-strong p-3 shadow-panel"
                        >
                            <nav className="flex flex-col">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="px-3 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <a
                                    href={GH_REPO}
                                    target="_blank" rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm text-white/80 bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <Github size={16} /> {s.nav.github}
                                </a>
                                <a
                                    href={GH_RELEASE}
                                    target="_blank" rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="relative inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-950 bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 overflow-hidden"
                                >
                                    <Download size={16} /> {s.nav.download}
                                    <span className="shimmer-overlay" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
