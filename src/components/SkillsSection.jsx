import { Book, Briefcase, CodeSquare, CodeXmlIcon, Container, Database, Frame, GitCommit, Github, LibraryBig, Spline} from "lucide-react"; // Import the Download icon


export const SkillsSection = () => {
    return (
        <section id="skills">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="grid grid-cols-1 gap-3">
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeXmlIcon className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">HTML/CSS</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeSquare className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">JavaScript</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">SQL</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeSquare className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">Python</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">MongoDB</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <LibraryBig className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">React.js</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Frame className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">Express.js</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Container className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">Docker</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">Git/Github</h4>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-3 card-hover">
                            <div className="flex items-center gap-4"> {/* Use items-center for vertical alignment */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Spline className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-lg">Postman</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    );
};