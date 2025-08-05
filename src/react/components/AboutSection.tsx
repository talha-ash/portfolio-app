import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/theme-context";
import { Circle } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "React Native", "TypeScript", "Next.js", "HTML/CSS"],
  },
  {
    category: "State Management",
    items: ["Redux", "Zustand", "React Query"],
  },
  {
    category: "Testing",
    items: ["React Testing Library", "Cypress", "Jest"],
  },
  {
    category: "Backend",
    items: ["Elixir", "Phoenix", "PostgreSQL", "Ruby on Rails"],
  },
  {
    category: "Architecture",
    items: ["Clean Architecture", "Application Performance", "Code Quality"],
  },
];

export const AboutSection = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 shrink-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            About & Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3
              className={`text-4xl md:text-5xl font-light mb-8 ${currentTheme.colors.text}`}
            >
              Background
            </h3>
            <div
              className={`space-y-6 ${currentTheme.colors.textSecondary} leading-relaxed text-lg`}
            >
              <p>
                Looking for a frontend developer role where I can apply my
                technical skills to create engaging user experiences. I'm eager
                to contribute to innovative web projects while continuing to
                grow professionally in a dynamic environment.
              </p>
              <p>
                I enjoy turning ideas into interactive applications and solving
                problems through clean, efficient code that users love. Ready to
                bring creativity, dedication, and fresh perspectives to a
                collaborative development team that values growth and
                innovation.
              </p>
            </div>

            <div className="mt-12">
              <h4
                className={`text-xl font-medium mb-6 ${currentTheme.colors.text}`}
              >
                Education
              </h4>
              <div className={`${currentTheme.colors.border} border-l-2 pl-6`}>
                <div
                  className={`text-sm ${currentTheme.colors.textSecondary} mb-2`}
                >
                  2013 - 2018
                </div>
                <div
                  className={`font-medium text-lg ${currentTheme.colors.text}`}
                >
                  Bachelor in Computer Science
                </div>
                <div className={currentTheme.colors.textSecondary}>
                  Allama Iqbal Open University
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3
              className={`text-4xl md:text-5xl font-light mb-8 ${currentTheme.colors.text}`}
            >
              Technical Skills
            </h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4
                    className={`text-sm font-medium ${currentTheme.colors.textSecondary} uppercase tracking-wider mb-4`}
                  >
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"                        
                        className={`rounded-full px-4 py-2 ${currentTheme.colors.text}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
