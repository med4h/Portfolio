import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from '@/components/StarBackground'

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-start justify-center">
            { /* theme toggle */ }
            <ThemeToggle />
            {/* background effects */}
            <StarBackground />
            {/* navbar */}

            {/* main content */}

            {/* footer */}
        </div>
    );
};