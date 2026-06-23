import React from "react";

/**
 * Stylised "A" mark for Artifex — an interlocking aperture-inspired glyph.
 * Inline SVG so it scales crisply and inherits theme colors.
 */
export default function Logo({ size = 36, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Artifex logo"
        >
            <defs>
                <linearGradient id="ax-grad-1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>
                <linearGradient id="ax-grad-2" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <filter id="ax-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.4" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* outer ring (aperture) */}
            <circle
                cx="32" cy="32" r="28"
                fill="none"
                stroke="url(#ax-grad-2)"
                strokeWidth="1.2"
                opacity="0.55"
            />

            {/* the A — two strokes meeting at apex with crossbar */}
            <g filter="url(#ax-glow)" stroke="url(#ax-grad-1)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M16 48 L32 14 L48 48" />
                <path d="M22.5 36 L41.5 36" />
            </g>

            {/* small mark inside the A — symbolizing the embedded image */}
            <rect x="27" y="28" width="10" height="6" rx="1.2" fill="url(#ax-grad-1)" opacity="0.85" />
        </svg>
    );
}
