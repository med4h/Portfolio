import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from '@/components/StarBackground'
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-start justify-center">
            { /* theme toggle */ }
            <ThemeToggle />
            {/* background effects */}
            <StarBackground />
            {/* navbar */}
            <Navbar />
            {/* main content */}
            <main>
                <HeroSection />
                <AboutSection />
            </main>
            {/* footer */}
        </div>
    );
};