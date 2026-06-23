import React from "react";
import AuroraBackground from "../components/AuroraBackground";
import ParticleField from "../components/ParticleField";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import ShowcaseGallery from "../components/ShowcaseGallery";
import TechStack from "../components/TechStack";
import QuickStart from "../components/QuickStart";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { LanguageProvider } from "../i18n/LanguageContext";

export default function Home() {
    return (
        <LanguageProvider>
            <div className="relative min-h-screen text-white/90 antialiased selection:bg-violet-glow/40">
                <AuroraBackground />
                <ParticleField />

                <Navbar />

                <main>
                    <Hero />
                    <FeatureGrid />
                    <ShowcaseGallery />
                    <TechStack />
                    <QuickStart />
                    <CTA />
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}
