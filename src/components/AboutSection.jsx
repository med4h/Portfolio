import { Book, Briefcase, Download, GitCommit } from "lucide-react"; // Import the Download icon

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                        Aspiring Software Engineer
                        </h3>
                        <p className="text-muted-foreground">
                        I am a Software Engineer Apprentice currently building on a diverse professional background 
                        to transition into a full-stack development role. 
                        My journey from a cook to a car dealership professional, and now into software development, 
                        has equipped me with a unique and valuable skill set.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                                href="#contact"
                                className="cosmic-button button-glow text-sm px-6 py-2 flex items-center justify-center"
                                style={{
                                    "--random-hue": 0,
                                }}
                            >
                                Contact
                            </a>

                            <a
                                href=""
                                className="cosmic-button button-glow text-sm px-6 py-2 flex items-center gap-2 justify-center"
                                style={{
                                    "--random-hue": 0,
                                }}
                            >
                                <Download size={16} className="inline-block" /> {/* Icon */}
                                Resume {/* Text */}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GitCommit className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Position</h4>
                                    <p className="text-sm text-muted-foreground">Software Engineer Apprentice at Clover, 
                                        focused on Quality Assurance (QA).</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Book className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Education</h4>
                                    <p className="text-sm text-muted-foreground">Multiverse Apprenticeship</p>
                                </div>
                            </div>
                        </div><div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-sm text-muted-foreground">10 years of work experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
