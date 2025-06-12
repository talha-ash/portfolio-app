import { cafezupas, cafezupasMobile, qampus, sisu, zimiLife } from "@/assets/images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";

import {
  Circle,
  Code,
  ExternalLink,
  Globe,
  Smartphone,
  Users,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cafe Zupas",
    category: "Restaurant Chain Platform",
    description:
      "A fresh food restaurant chain platform specializing in protein bowls, soups, salads, and sandwiches. Built major item selection and customization module with complex UI for millions of users.",
    image: "restaurant",
    imageUrl: cafezupas,
    technologies: ["React Native", "React", "TypeScript", "Redux"],
    links: {
      live: "https://cafezupas.com",
      store: "https://play.google.com/store/apps/details?id=com.cafezupas",
    },
    highlights: [
      "Complex item customization interface",
      "Code reuse across mobile and web",
      "Smooth UI for millions of users",
      "Real-time order management",
    ],
    details:
      "Led the development of a comprehensive food ordering platform that serves millions of customers. The project involved creating a sophisticated item customization system that allows users to build their perfect meal with over 200 premium ingredients. Implemented real-time synchronization between mobile and web platforms, ensuring a seamless experience across all devices.",
  },
  {
    id: 5,
    title: "Cafe Zupas Catering",
    category: "Restaurant Chain Platform for Catring",
    description:
      "A fresh food restaurant chain platform specializing in protein bowls, soups, salads, and sandwiches. Built major item selection and customization module with complex UI for millions of users.",
    image: "restaurant",
    imageUrl: cafezupasMobile,
    technologies: ["React Native", "TypeScript", "Redux"],
    links: {      
      store: "https://play.google.com/store/apps/details?id=com.cafezupas",
    },
    highlights: [
      "Complex item customization interface",
      "Code reuse across mobile and web",
      "Smooth UI for millions of users",
      "Real-time order management",
    ],
    details:
      "Led the development of a comprehensive food ordering platform that serves millions of customers. The project involved creating a sophisticated item customization system that allows users to build their perfect meal with over 200 premium ingredients. Implemented real-time synchronization between mobile and web platforms, ensuring a seamless experience across all devices.",
  },
  {
    id: 2,
    title: "Zimi Smart Home",
    category: "IoT Platform",
    description:
      "IoT-based smart home automation platform with light controllers, fan controllers, and dimmer switches. Built comprehensive admin dashboard and customer portal.",
    image: "iot",
    imageUrl: zimiLife,
    technologies: ["React", "TypeScript", "Real-time APIs", "IoT Integration"],
    links: {
      live: "https://zimi.life",
    },
    highlights: [
      "Real-time device monitoring",
      "Smart home automation",
      "Complex device management interface",
      "Customer portal application",
    ],
    details:
      "Developed a complete IoT ecosystem for smart home automation. Created real-time monitoring dashboards that track device usage and analytics across thousands of connected homes. Built intuitive customer portals where users can schedule, control, and manage all their smart devices with seamless backend synchronization.",
  },
  {
    id: 3,
    title: "MyQampus",
    category: "Educational Platform",
    description:
      "Comprehensive educational web application providing campus management and student services with modern interface and seamless user experience.",
    image: "education",
    imageUrl: qampus,
    technologies: ["React", "Next.js", "TypeScript", "Modern UI"],
    links: {
      live: "https://myqampus.com",
    },
    highlights: [
      "Campus management system",
      "Student services platform",
      "Modern educational interface",
      "Comprehensive feature set",
    ],
    details:
      "Built a comprehensive educational platform that streamlines campus operations and enhances student experience. Developed features for course management, student enrollment, grade tracking, and communication tools. The platform serves multiple educational institutions with a scalable, modern architecture.",
  },
  {
    id: 4,
    title: "SISUpro",
    category: "Mobile Application",
    description:
      "Professional mobile application built with React Native, focusing on user experience and performance optimization.",
    image: "mobile",
    imageUrl: sisu,
    technologies: ["React Native", "TypeScript", "Mobile Optimization"],
    links: {
      store: "https://apps.apple.com/dk/app/sisupro/id1569565460",
    },
    highlights: [
      "Native mobile experience",
      "Performance optimized",
      "Professional UI/UX",
      "Cross-platform compatibility",
    ],
    details:
      "Developed a high-performance mobile application with focus on user experience and native feel. Implemented advanced optimization techniques to ensure smooth performance across different devices. The app features intuitive navigation, offline capabilities, and seamless data synchronization.",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(1);
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen px-6 md:px-8 py-20 shrink-0">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex items-center gap-4 mb-16">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            Featured Projects
          </h2>
        </div>

        <div className="flex gap-12 h-full">
          {/* Project Links Sidebar */}
          <div className="w-64 shrink-0">
            <div className="space-y-4">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                  className={`block text-left p-4 rounded-lg transition-all duration-300 w-full ${
                    selectedProject === project.id
                      ? `${currentTheme.colors.surface} shadow-lg border-l-4 border-gray-900`
                      : `${currentTheme.colors.surface}/60 hover:${currentTheme.colors.surface}/80 border-l-4 border-transparent hover:border-gray-300`
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
          <div className="flex-1 flex items-center justify-center">
            {selectedProject ? (
              <div className="max-w-4xl">
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  )!;
                  return (
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div
                          className={`aspect-4/3 rounded-lg flex items-center justify-center mb-8 `}
                        >
                          <img
                            src={project.imageUrl.src}
                            alt="A starry night sky."
                          />
                        </div>
                      </div>

                      <div>
                        <Badge variant="outline"
                        className={`mb-4 rounded-full ${currentTheme.colors.text}`}
                        >
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
                                className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0`}
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
                          {project.links.live && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                              asChild
                            >
                              <a href={project.links.live} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Site
                              </a>
                            </Button>
                          )}
                          {project.links.store && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full"
                              asChild
                            >
                              <a href={project.links.store} target="_blank">
                                <Smartphone className="w-4 h-4 mr-2" />
                                App Store
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
                  Select a project to explore
                </h3>
                <p className={`text-xl ${currentTheme.colors.textSecondary}`}>
                  Click on any project from the sidebar to see details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
