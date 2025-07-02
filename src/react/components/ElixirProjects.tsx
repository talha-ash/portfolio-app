import { consumerVoice, recipes } from "@/assets/images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { Circle, Code, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const elixirProjects = [
  {
    id: 1,
    title: "Real-time Chat Application",
    category: "Phoenix LiveView",
    image: "chat",
    imageUrl: consumerVoice,
    technologies: [
      "Elixir",
      "Phoenix",
      "React",
      "Typescript",
      "Zustand",
      "Webrtc",
      "LiveView",
    ],
    links: {
      github: "https://github.com/talha-ash/consumer_voice_mvp",
      live: "https://consumer-voice-mvp.onrender.com/users/log_in",
    },
    highlights: [
      "Real-time Employee Status",
      "Call Sync and Rejoined",
      "Genserber, Registry, Dynamic Supervisor",
      "Employee Queue System",
    ],
    details:
      "A real-time call management platform connecting consumers with company employees through voice calls. The system manages employee availability, handles call routing and queuing, and provides robust connection management with automatic reconnection capabilities for dropped calls.Employee availability changes, call queue positions, and connection status are instantly synchronized across all clients.The React client application communicates via WebSocket connections for real-time updates and WebRTC for voice calling.",
  },
  {
    id: 2,
    title: "Recipe Kitchen Liveview Application",
    category: "Phoenix LiveView",
    image: "chat",
    imageUrl: recipes,
    technologies: [
      "Elixir",
      "Phoenix",
      "LiveView",
      "Tailwind"
    ],
    links: {
      github: "https://github.com/talha-ash/kitchen_recipe",
      live: false,
    },
    highlights: [
      "LiveView Social App",
      "Complex Form for Recipe CRUD",
      "Search & Filter Recipes and Profiles",
      "Recipe Comment and Like System",
    ],
    details:
      "RecipeShare is a modern social platform for cooking enthusiasts to discover, share, and connect through recipes. Users can create and manage their own recipe collections, follow other cooks, and explore a diverse community of culinary creations through advanced search and filtering capabilities.",
  },
];

export const ElixirProjects = () => {
  const { currentTheme } = useTheme();
  const [selectedElixirProject, setSelectedElixirProject] = useState<
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
            Elixir & Phoenix Projects
          </h2>
        </div>

        <div className="flex gap-12 h-full">
          {/* Project Links Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-4">
              {elixirProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() =>
                    setSelectedElixirProject(
                      selectedElixirProject === project.id ? null : project.id
                    )
                  }
                  className={`block text-left p-4 rounded-lg transition-all duration-300 w-full ${
                    selectedElixirProject === project.id
                      ? `${currentTheme.colors.surface} shadow-lg border-l-4 border-purple-600`
                      : `${currentTheme.colors.surface}/60 hover:${currentTheme.colors.surface}/80 border-l-4 border-transparent hover:border-purple-300`
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
          <div className="flex-1 flex justify-center">
            {selectedElixirProject ? (
              <div className="max-w-4xl">
                {(() => {
                  const project = elixirProjects.find(
                    (p) => p.id === selectedElixirProject
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
                        <Badge variant="outline" className={`mb-4 rounded-full ${currentTheme.colors.text}`}>
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
                            // onClick={() => setSelectedCode(project.code)}
                          >
                            <Code className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          )}
                          {project.links.live && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
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
                  Select an Elixir project to explore
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
