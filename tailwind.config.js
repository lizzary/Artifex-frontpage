/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/**/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    950: "#070418",
                    900: "#0b0822",
                    800: "#120c30",
                    700: "#1b1340",
                    600: "#251b54",
                },
                violet: {
                    glow: "#a855f7",
                    soft: "#c084fc",
                },
                cyan: {
                    glow: "#22d3ee",
                    soft: "#67e8f9",
                },
                gold: {
                    glow: "#fbbf24",
                },
            },
            fontFamily: {
                display: [
                    '"Cormorant Garamond"',
                    '"Playfair Display"',
                    'Georgia',
                    'serif',
                ],
                sans: [
                    '"Inter"',
                    '"PingFang SC"',
                    '"Microsoft YaHei"',
                    'system-ui',
                    'sans-serif',
                ],
                mono: [
                    '"JetBrains Mono"',
                    'Menlo',
                    'Consolas',
                    'monospace',
                ],
            },
            backgroundImage: {
                'grid-fade': "linear-gradient(to bottom, rgba(7,4,24,0) 0%, rgba(7,4,24,0.8) 70%, rgba(7,4,24,1) 100%)",
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
            },
            animation: {
                'aurora-1': 'aurora1 22s ease-in-out infinite',
                'aurora-2': 'aurora2 28s ease-in-out infinite',
                'aurora-3': 'aurora3 32s ease-in-out infinite',
                'float-slow': 'floatSlow 9s ease-in-out infinite',
                'float-slower': 'floatSlow 14s ease-in-out infinite',
                'shimmer': 'shimmer 2.6s linear infinite',
                'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
                'spin-slow': 'spin 22s linear infinite',
                'gradient-x': 'gradientX 6s ease infinite',
                'rise': 'rise 0.9s cubic-bezier(.2,.7,.2,1) both',
                'marquee': 'marquee 40s linear infinite',
            },
            keyframes: {
                aurora1: {
                    '0%,100%': { transform: 'translate3d(-12%, -10%, 0) rotate(0deg) scale(1)' },
                    '50%':     { transform: 'translate3d(18%, 6%, 0) rotate(20deg) scale(1.15)' },
                },
                aurora2: {
                    '0%,100%': { transform: 'translate3d(20%, 12%, 0) rotate(0deg) scale(1.1)' },
                    '50%':     { transform: 'translate3d(-18%, -8%, 0) rotate(-25deg) scale(0.95)' },
                },
                aurora3: {
                    '0%,100%': { transform: 'translate3d(-6%, 22%, 0) rotate(0deg) scale(0.9)' },
                    '50%':     { transform: 'translate3d(10%, -14%, 0) rotate(30deg) scale(1.2)' },
                },
                floatSlow: {
                    '0%,100%': { transform: 'translateY(0) translateX(0)' },
                    '50%':     { transform: 'translateY(-14px) translateX(6px)' },
                },
                shimmer: {
                    '0%':   { backgroundPosition: '-220% 0' },
                    '100%': { backgroundPosition: '220% 0' },
                },
                pulseSoft: {
                    '0%,100%': { opacity: 0.55 },
                    '50%':     { opacity: 1 },
                },
                gradientX: {
                    '0%,100%': { backgroundPosition: '0% 50%' },
                    '50%':     { backgroundPosition: '100% 50%' },
                },
                rise: {
                    '0%':   { opacity: 0, transform: 'translateY(28px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                marquee: {
                    '0%':   { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            boxShadow: {
                'glow-violet': '0 0 40px -8px rgba(168,85,247,0.55), 0 0 80px -20px rgba(168,85,247,0.35)',
                'glow-cyan':   '0 0 40px -8px rgba(34,211,238,0.55), 0 0 80px -20px rgba(34,211,238,0.30)',
                'glow-gold':   '0 0 40px -8px rgba(251,191,36,0.45)',
                'panel':       '0 30px 80px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)',
            },
        },
    },
    plugins: [],
}
