import { recipes } from "@/assets/images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { Calendar, Circle, Cloud, Code, Github, Zap } from "lucide-react";
import { useState } from "react";

const hobbyProjects = [
  {
    id: 1,
    title: "Scratch Kitchen App",
    category: "Recipe Social App",
    image: "weather",
    imageUrl: recipes,
    technologies: ["React", "Typescript", "TDD", "Clean Architecture"],
    links: {
      github: "https://github.com/talha-ash/scratch-tdd",
      live: false,
    },
    highlights: [
      "Build App Follwing TDD",
      "Architect App Follwing Clean Architecture",
      "Practice DDD",      
    ],
    details:
      "A social platform where users can create, share, and discover recipes while following other cooking enthusiasts. The app features full CRUD operations for recipes, user profiles with follow functionality, and advanced search/filtering capabilities.Built with React 18 and TypeScript, using TanStack Router for type-safe routing and Tailwind CSS for styling. The application follows clean architecture principles with separated domain, infrastructure, and presentation layers. Development follows Test-Driven Development (TDD) using Vitest for unit/integration tests and Cypress for end-to-end testing",
  },
];

export const PracticeProjects = () => {
  const { currentTheme } = useTheme();
  const [selectedPracticeProject, setSelectedPracticeProject] = useState<
    number | null
  >(1);

  return (
    <section className="min-h-screen px-6 md:px-8 py-20 flex-shrink-0">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex items-center gap-4 mb-16">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            Practice & Side Projects
          </h2>
        </div>

        <div className="flex gap-12 h-full">
          {/* Project Links Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-4">
              {hobbyProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() =>
                    setSelectedPracticeProject(
                      selectedPracticeProject === project.id ? null : project.id
                    )
                  }
                  className={`block text-left p-4 rounded-lg transition-all duration-300 w-full ${
                    selectedPracticeProject === project.id
                      ? `${currentTheme.colors.surface} shadow-lg border-l-4 border-blue-600`
                      : `${currentTheme.colors.surface}/60 hover:${currentTheme.colors.surface}/80 border-l-4 border-transparent hover:border-blue-300`
                  }`}
                >
                  <div
                    className={`text-sm font-medium ${currentTheme.colors.text}`}
                  >
                    {project.title}
                  </div>
                  <div
                    className={`text-xs ${currentTheme.colors.textSecondary}`}
                  >
                    {project.category}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1 flex  justify-center">
            {selectedPracticeProject ? (
              <div className="max-w-4xl">
                {(() => {
                  const project = hobbyProjects.find(
                    (p) => p.id === selectedPracticeProject
                  )!;
                  return (
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div
                          className={`aspect-[4/3] rounded-lg flex items-center justify-center mb-8 `}
                        >
                          <img src={project.imageUrl.src} />
                        </div>
                      </div>

                      <div>
                        <Badge variant="outline" className="mb-4 rounded-full">
                          {project.category}
                        </Badge>
                        <h3
                          className={`text-3xl md:text-4xl font-light mb-6 ${currentTheme.colors.text}`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`${currentTheme.colors.textSecondary} text-lg leading-relaxed mb-8`}
                        >
                          {project.details}
                        </p>

                        <div className="space-y-3 mb-8">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div
                                className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span
                                className={`${currentTheme.colors.text} text-sm`}
                              >
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mb-8 flex-wrap">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-full"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                          >
                            <Code className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                              asChild
                            >
                              <a href={project.links.github} target="_blank">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="text-center">
                <h3
                  className={`text-4xl md:text-5xl font-light mb-6 ${currentTheme.colors.text}`}
                >
                  Select a Practice project to explore
                </h3>
                <p className={`text-xl ${currentTheme.colors.textSecondary}`}>
                  Click on any project from the sidebar to see details and code
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
