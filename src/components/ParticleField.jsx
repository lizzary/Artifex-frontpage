import React, { useEffect, useRef } from "react";

/**
 * Lightweight canvas-based starfield / particle field.
 * Particles drift slowly, twinkle, and gently react to the cursor.
 * Designed to be subtle — looks like dust caught in light.
 */
export default function ParticleField({ density = 0.00009 }) {
    const canvasRef = useRef(null);
    const animRef = useRef(0);
    const pointerRef = useRef({ x: -9999, y: -9999, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let particles = [];
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            const { innerWidth: w, innerHeight: h } = window;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.max(40, Math.floor(w * h * density));
            particles = new Array(count).fill(0).map(() => spawn(w, h));
        };

        const spawn = (w, h) => {
            const palette = ["#c084fc", "#67e8f9", "#fbbf24", "#e9d5ff"];
            return {
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5 + 0.4,
                vx: (Math.random() - 0.5) * 0.12,
                vy: (Math.random() - 0.5) * 0.12,
                phase: Math.random() * Math.PI * 2,
                speed: 0.005 + Math.random() * 0.012,
                color: palette[Math.floor(Math.random() * palette.length)],
            };
        };

        const onMove = (e) => {
            pointerRef.current.x = e.clientX;
            pointerRef.current.y = e.clientY;
            pointerRef.current.active = true;
        };
        const onLeave = () => { pointerRef.current.active = false; };

        const render = () => {
            const { innerWidth: w, innerHeight: h } = window;
            ctx.clearRect(0, 0, w, h);

            const { x: px, y: py, active } = pointerRef.current;

            for (const p of particles) {
                p.phase += p.speed;
                const twinkle = 0.55 + 0.45 * Math.sin(p.phase);

                // gentle drift
                p.x += p.vx;
                p.y += p.vy;

                // cursor attraction (very gentle)
                if (active) {
                    const dx = px - p.x, dy = py - p.y;
                    const dist2 = dx * dx + dy * dy;
                    if (dist2 < 160 * 160) {
                        const f = 0.0009 * (1 - dist2 / (160 * 160));
                        p.vx += dx * f;
                        p.vy += dy * f;
                    }
                }

                // soft damping
                p.vx *= 0.985;
                p.vy *= 0.985;

                // wrap
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                ctx.beginPath();
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.35 * twinkle;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // halo
                ctx.globalAlpha = 0.08 * twinkle;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            animRef.current = requestAnimationFrame(render);
        };

        resize();
        render();

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [density]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-[5]"
        />
    );
}
