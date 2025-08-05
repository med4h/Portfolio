import { Book, Briefcase, Download, Laptop, GraduationCap, Sprout, LaptopMinimalCheck } from "lucide-react"; // Import the Download icon



export const ReflectionSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Sprout className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">New Career</h4>
                                    <p className="text-sm text-muted-foreground">My Multiverse apprenticeship gave me the hands-on skills and real-world experience 
                                        I needed to feel ready for a career in tech. It's provided a solid foundation that
                                         I'm excited to build on as I start this new chapter.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Laptop className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Coding Knowledge</h4>
                                    <p className="text-sm text-muted-foreground">Before starting my Multiverse apprenticeship, I had little to no coding knowledge, 
                                        and now I've built some awesome projects from scratch. It's been incredible to see how 
                                        far I've come and how much I've learned in such a short time.</p>
                                </div>
                            </div>
                        </div><div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Completion of Apprenticeship</h4>
                                    <p className="text-sm text-muted-foreground">It's bittersweet to see my apprenticeship come to an end, 
                                        but I'm incredibly grateful for the experience. 
                                        The skills and opportunities it has given me have been life-changing, and I'm so excited for what's next.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Reflection on my Learning
                        </h2>
                        <p className="text-muted-foreground">
                        Looking back on my Multiverse apprenticeship, it's incredible to see how much I've grown. 
                        I started with almost no coding knowledge and was pretty nervous about the whole thing. 
                        Now, I'm confident in the skills I've learned, having built multiple projects from scratch and navigated different tech stacks. 
                        The journey has been amazing, not just because of the technical skills I've gained, 
                        but also because of the incredible apprentices I've met along the way.
                        </p>
                        <p className="text-muted-foreground">
                        As this chapter comes to a close, I'm feeling a mix of emotions. 
                        It's bittersweet to leave this experience behind, but I'm truly grateful for the life-changing opportunity. 
                        The apprenticeship has given me a solid foundation and the confidence to jump into a new career in tech, 
                        and I'm excited to see where it takes me.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};