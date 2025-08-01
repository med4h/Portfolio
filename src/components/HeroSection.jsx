export const HeroSection = () => {
    const animatedText = "Adrian Meda Sanchez"; // Text to animate
    const staticText = "Hi, I'm"; // Static text

    return (
        <section
            id="#hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight"
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
                </div>
            </div>
        </section>
    );
};