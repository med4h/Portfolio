import {ArrowDown, Bot, Briefcase} from "lucide-react";

export const HeroSection = () => {
    const animatedText = "Adrian Meda Sanchez"; // Text to animate
    const staticText = "Hi, I'm"; // Static text
    

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1
                        className="text-4xl sm:text-2xl md:text-6xl font-bold tracking-tight"
                        style={{
                            "--total-letters": animatedText.length, // Pass total letters as a CSS variable
                        }}
                    >
                        {/* Static text */}
                        <span className="animate-fade-in-delay-2">{staticText}</span>{" "}
                        {/* Animated text */}
                        <span className="animate-fade-in-delay-4">
                            {animatedText.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="letter"
                                    style={{
                                        "--index": index, // Assign index for staggered animation
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                                </span>
                            ))}
                        </span>
                    </h1>
                    <p className="text-md md:text-md font-semibold text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Software Engineer Apprentice at Clover
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-5 text-sm text-muted-foreground mb-5">
                        <a
                            href="#about"
                            className="cosmic-button button-glow px-6 py-2 "
                            style={{
                                "--random-hue": 0,
                            }}
                        >
                            <Bot/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>Check me out!</span>
            <ArrowDown className="h-6 w-" />
            </div>
        </section>
    );
};