import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import {
  ArrowUpRight,
  Calendar,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

export const IntroSection = ({
  scrollToSection,
}: {
  scrollToSection: (value: number) => void;
}) => {
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 shrink-0">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className={`w-2 h-2 ${currentTheme.colors.accent} rounded-full animate-pulse`}
          ></div>
          <span
            className={`text-sm ${currentTheme.colors.textSecondary} uppercase tracking-wider`}
          >
            Available for opportunities
          </span>
        </div>

        <h1
          className={`text-6xl md:text-8xl font-light leading-tight mb-8 animate-fade-in-up ${currentTheme.colors.text}`}
        >
          Senior Frontend
          <br />
          Developer
        </h1>

        <p
          className={`text-xl md:text-2xl ${currentTheme.colors.textSecondary} font-light leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up-delayed`}
        >
          I create digital experiences that matter. Specializing in React &
          React Native development with 5+ years of experience building
          applications used by millions worldwide.
        </p>

        <div
          className={`flex items-center justify-center gap-8 mb-16 animate-fade-in-up-slow ${currentTheme.colors.textSecondary}`}
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Millions of users impacted</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>5+ years experience</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-16 animate-fade-in-up-slower">
          <Button
            onClick={() => scrollToSection(4)}
            variant="ghost"
            className="rounded-full px-8 py-3 text-base hover:scale-105 transition-transform"
          >
            <Mail className="mr-2 w-4 h-4" />
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 text-base"
            asChild
          >
            <a href="Talha-Resume.pdf" download>
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown
            className={`w-6 h-6 ${currentTheme.colors.textSecondary} mx-auto`}
          />
        </div>
      </div>
    </section>
  );
};
