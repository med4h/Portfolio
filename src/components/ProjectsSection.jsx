import { Github, Link2 } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Inventory App",
        description: "Full Stack Inventory Web App Group Project",
        image: "/projects/Project1.png",
        githubUrl: "https://github.com/MV-SWE-Fiserv-US/group-full-stack-inventory-project-debugsquad",
    },
    {
        id: 2,
        title: "ADB UI/Tool",
        description: "ADB UI and Command Executor Pair Project",
        image: "/projects/Project2.png",
        githubUrl: "https://github.com/calvinlazzz/op-adb",
    },
    {
        id: 3,
        title: "Pokedex",
        description: "Front-End Pokemon API Project",
        image: "/projects/Project3.png",
        githubUrl: "https://github.com/med4h/pokemon-game",
    },
    {
        id: 4,
        title: "Portfolio Project",
        description: "Final Bootcamp Hackathon Project: Portfolio Website",
        image: "/projects/Project4.png",
        githubUrl: "#",
    },
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {" "}
                Multiverse Projects
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
                These are some of my recent projects that I've worked on during my
                Apprenticeship.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-1 mt-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center px-4 py-4">
                            <div className="flex space-x-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="cosmic-button button-glow project-button px-4 py-1"
                                    style={{
                                        "--random-hue": 0,
                                    }}
                                >
                                    <Link2 size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};