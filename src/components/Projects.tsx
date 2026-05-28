import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Task Manager",
    category: "Productivity",
    description: "A robust application to organize tasks, set priorities, and track progress efficiently.",
    link: "https://github.com/jothsna0206/Task_Manager"
  },
  {
    title: "Memory Flip game",
    category: "Gaming",
    description: "An interactive card matching game built to test memory and improve cognitive skills.",
    link: "https://github.com/jothsna0206/MemoryFlip_Game"
  },
  {
    title: "Calculator Interface",
    category: "Utility",
    description: "A sleek, modern calculator web app with a responsive and intuitive design.",
    link: "https://github.com/jothsna0206/Calculator_Interface"
  },
  {
    title: "Blood-Bank Management System",
    category: "Healthcare",
    description: "A comprehensive system for managing blood donations, inventory, and hospital requests.",
    link: ""
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black min-h-screen py-32 px-8 md:px-24 text-white z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Selected Work</h3>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => {
            const CardContent = (
              <div 
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 h-full cursor-pointer"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[100px] rounded-full" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                      {project.category}
                    </span>
                    {project.link && (
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-3xl font-medium mb-3">{project.title}</h4>
                    <p className="text-white/50 font-light leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {CardContent}
              </a>
            ) : (
              <div key={i} className="block">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
