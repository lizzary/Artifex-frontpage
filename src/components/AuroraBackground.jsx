import React from "react";

/**
 * Full-screen ambient background:
 *   - Deep ink base color
 *   - Three drifting aurora blobs (radial gradients) with mix-blend
 *   - Soft grid overlay
 *   - Faint top vignette + bottom fade to keep the foreground legible
 *   - Decorative glow rings (only on >= sm screens)
 */
export default function AuroraBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
        >
            {/* Aurora blobs */}
            <div className="absolute -top-1/3 -left-1/4 h-[80vmax] w-[80vmax] rounded-full opacity-60 mix-blend-screen blur-3xl animate-aurora-1"
                 style={{
                     background:
                         "radial-gradient(closest-side, rgba(168,85,247,0.55), rgba(168,85,247,0.0) 70%)",
                 }}
            />
            <div className="absolute -bottom-1/3 -right-1/4 h-[75vmax] w-[75vmax] rounded-full opacity-55 mix-blend-screen blur-3xl animate-aurora-2"
                 style={{
                     background:
                         "radial-gradient(closest-side, rgba(34,211,238,0.45), rgba(34,211,238,0.0) 70%)",
                 }}
            />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[55vmax] w-[55vmax] rounded-full opacity-40 mix-blend-screen blur-3xl animate-aurora-3"
                 style={{
                     background:
                         "radial-gradient(closest-side, rgba(251,191,36,0.35), rgba(251,191,36,0.0) 70%)",
                 }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-[0.45]" />
            <div className="absolute inset-0 bg-grid-fine opacity-30" />

            {/* Top vignette */}
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-ink-950 via-ink-950/40 to-transparent" />
            {/* Bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-ink-950 to-transparent" />

            {/* Decorative glow rings */}
            <div className="hidden sm:block absolute top-24 left-10 h-32 w-32 rounded-full border border-violet-glow/20 animate-spin-slow" />
            <div className="hidden sm:block absolute top-40 left-24 h-24 w-24 rounded-full border border-cyan-glow/15 animate-spin-slow" style={{ animationDirection: "reverse" }} />
            <div className="hidden md:block absolute bottom-40 right-10 h-40 w-40 rounded-full border border-violet-glow/15 animate-spin-slow" />

            {/* Subtle noise to break up gradient banding */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-noise" />
        </div>
    );
}
