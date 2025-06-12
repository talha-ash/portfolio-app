import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";
import { Circle } from "lucide-react";

const experiences = [
  {
    period: "2021 - Present",
    company: "Tkxel",
    role: "Senior Software Engineer",
    description:
      "Developed high-quality mobile and web applications from scratch using React, React Native, TypeScript, and their ecosystems, creating apps that are used by millions of people worldwide.",
    highlights: [
      "Built applications used by millions worldwide",
      "Mentored junior developers on best practices",
      "Led technical architecture decisions",
      "Focused on user-friendly, efficient solutions",
    ],
    technologies: ["React Native", "TypeScript", "React", "Next.js"],
  },
  {
    period: "2020 - 2021",
    company: "Regbits",
    role: "Senior Software Engineer",
    description:
      "Developed and deployed a complete web application product for the company, working from requirements gathering through implementation using robust technologies.",
    highlights: [
      "Full-stack product development",
      "Requirements analysis and technical solutions",
      "API development with Elixir/Phoenix",
      "Team mentorship and code quality improvement",
    ],
    technologies: ["React", "Elixir", "Phoenix", "PostgreSQL"],
  },
  {
    period: "2019 - 2020",
    company: "Tiksom",
    role: "Software Engineer",
    description:
      "Started development career focusing on learning and mastering fullstack technologies including React, Ruby on Rails, jQuery, Ajax, and Bootstrap.",
    highlights: [
      "Mastered fullstack development fundamentals",
      "Built diverse web applications",
      "Progressed from simple to complex projects",
      "Learned technology integration patterns",
    ],
    technologies: ["React", "Ruby on Rails", "jQuery", "Bootstrap"],
  },
];

export const WorkSection = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 shrink-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-16">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            Work Experience
          </h2>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Badge
                      variant="outline"
                      className="mb-4 rounded-full text-xs"
                    >
                      {exp.period}
                    </Badge>
                    <h3
                      className={`text-2xl md:text-3xl font-light mb-2 ${currentTheme.colors.text}`}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className={`text-lg ${currentTheme.colors.textSecondary} mb-6`}
                    >
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p
                      className={`${currentTheme.colors.textSecondary} text-lg leading-relaxed mb-8`}
                    >
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div
                            className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0`}
                          ></div>
                          <span className={currentTheme.colors.text}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
