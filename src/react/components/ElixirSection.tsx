import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";
import { Circle } from "lucide-react";

const elixirExperience = {
  period: "2020 - 2021",
  company: "Regbits",
  role: "Software Engineer",
  description:
    "Developed and deployed a complete web application product using Elixir and Phoenix framework. Worked from requirements gathering through implementation, building robust APIs and real-time features.",
  highlights: [
    "Built production web applications with Elixir/Phoenix",
    "Developed real-time features using Phoenix LiveView",
    "Implemented robust API architecture with Phoenix",
    "Database design and optimization with Ecto",
    "Functional programming patterns and OTP principles",
    "Performance optimization and fault-tolerant systems",
  ],
  technologies: ["Elixir", "Phoenix", "LiveView", "Ecto", "PostgreSQL", "OTP"],
  keyProjects: [
    "Real-time web application with LiveView",
    "RESTful API services with Phoenix",
    "Database migrations and schema design",
  ],
};

export const ElixirSection = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 flex-shrink-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            Elixir Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3
              className={`text-4xl md:text-5xl font-light mb-8 ${currentTheme.colors.text}`}
            >
              Functional Programming
            </h3>
            <div
              className={`space-y-6 ${currentTheme.colors.textSecondary} leading-relaxed text-lg`}
            >
              <p>
                During my time at Regbits, I had the opportunity to work
                extensively with Elixir and the Phoenix framework. This
                experience introduced me to the power of functional programming
                and the Actor model through OTP (Open Telecom Platform).
              </p>
              <p>
                I built production-ready web applications leveraging Elixir's
                fault-tolerance and concurrency features. The experience taught
                me to think differently about system design, embracing
                immutability and pattern matching to create more reliable and
                maintainable code.
              </p>
              <p>
                Working with Phoenix LiveView was particularly exciting, as it
                allowed me to build real-time, interactive web applications
                without writing JavaScript, showcasing the elegance of
                server-side rendering with live updates.
              </p>
            </div>
          </div>

          <div>
            <Card
              className={`${currentTheme.colors.surface} ${currentTheme.colors.border} border mb-8`}
            >
              <CardContent className="p-8">
                <Badge variant="outline" className={`mb-4 rounded-full text-xs ${currentTheme.colors.text}`}>
                  {elixirExperience.period}
                </Badge>
                <h4
                  className={`text-2xl font-light mb-2 ${currentTheme.colors.text}`}
                >
                  {elixirExperience.role}
                </h4>
                <p
                  className={`text-lg ${currentTheme.colors.textSecondary} mb-6`}
                >
                  {elixirExperience.company}
                </p>

                <p
                  className={`${currentTheme.colors.textSecondary} leading-relaxed mb-6`}
                >
                  {elixirExperience.description}
                </p>

                <div className="space-y-3 mb-6">
                  {elixirExperience.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span className={`${currentTheme.colors.text} text-sm`}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {elixirExperience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <h4
                className={`text-lg font-medium mb-4 ${currentTheme.colors.text}`}
              >
                Key Projects Built
              </h4>
              <div className="space-y-3">
                {elixirExperience.keyProjects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0`}
                    ></div>
                    <span
                      className={`${currentTheme.colors.textSecondary} text-sm`}
                    >
                      {project}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
