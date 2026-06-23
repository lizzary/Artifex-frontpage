import React from "react";
import { Github, ExternalLink, Heart } from "lucide-react";
import Logo from "./Logo";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
    const { s } = useLang();
    const year = new Date().getFullYear();
    const copyright = (s.footer.copyright || "").replace("{year}", year);
    return (
        <footer className="relative border-t border-white/5 mt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#top" className="inline-flex items-center gap-2.5">
                            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-violet-glow/25 to-cyan-glow/15 border border-white/5">
                                <Logo size={24} />
                            </span>
                            <span className="font-display text-2xl"><span className="text-gradient">Artifex</span></span>
                        </a>
                        <p className="mt-4 text-sm text-white/55 max-w-md leading-relaxed">
                            {s.footer.tagline}
                        </p>
                    </div>

                    {/* Project */}
                    <div>
                        <div className="text-xs uppercase tracking-widest text-violet-soft/80">{s.footer.sectionProject}</div>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <FooterLink href="https://github.com/lizzary/Artifex">{s.footer.links.repo}</FooterLink>
                            <FooterLink href="https://github.com/lizzary/Artifex/releases">{s.footer.links.releases}</FooterLink>
                            <FooterLink href="https://github.com/lizzary/Artifex/blob/main/LICENSE">{s.footer.links.license}</FooterLink>
                            <FooterLink href="https://github.com/lizzary/Artifex/issues">{s.footer.links.issues}</FooterLink>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <div className="text-xs uppercase tracking-widest text-violet-soft/80">{s.footer.sectionResources}</div>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <FooterLink href="https://github.com/lizzary/Artifex/blob/main/README.md">{s.footer.links.readme}</FooterLink>
                            <FooterLink href="https://github.com/lizzary/Artifex/blob/main/readme/readme_zh.md">{s.footer.links.readmeZh}</FooterLink>
                            <FooterLink href="https://huggingface.co/SmilingWolf/wd-eva02-large-tagger-v3">{s.footer.links.tagger}</FooterLink>
                            <FooterLink href="https://github.com/comfyanonymous/ComfyUI">{s.footer.links.comfyui}</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-white/45">
                        {copyright}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/45">
                        <span className="inline-flex items-center gap-1.5">
                            {s.footer.madeBy} <Heart size={12} className="text-rose-400" /> {s.footer.madeBySuffix}
                        </span>
                        <span className="opacity-50">·</span>
                        <a
                            href="https://github.com/lizzary/Artifex"
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1 hover:text-white transition-colors"
                        >
                            <Github size={13} /> lizzary/Artifex
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }) {
    const external = /^https?:\/\//.test(href);
    return (
        <li>
            <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition-colors link-underline"
            >
                {children}
                {external && <ExternalLink size={11} className="opacity-70" />}
            </a>
        </li>
    );
}
