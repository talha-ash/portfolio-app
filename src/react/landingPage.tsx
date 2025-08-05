"use client";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import { ThemeSelector } from "@/components/theme-selector";
import { AnimatedBackground } from "./components/animatedBackground";
import { Header } from "./components/Navigation";
import { SectionIndicator } from "./components/sectionIndicator";
import { IntroSection } from "./components/introSection";
import { AboutSection } from "./components/AboutSection";
import { WorkSection } from "./components/WorkSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { ElixirSection } from "./components/ElixirSection";
import { ElixirProjects } from "./components/ElixirProjects";
import { PracticeProjects } from "./components/PracticeProjects";
import { MobileAppSection } from "./components/MobileAppSection";

export default function LandingPage() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { currentTheme } = useTheme();
  const sections = [
    "intro",
    "about",
    "work",
    "projects",
    "mobileApps",
    "elixir",
    "elixirProjects",
    "practiceProjects",
    "contact",
  ];

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, sections.length, isScrolling]);

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div
      className={`h-screen overflow-hidden ${currentTheme.colors.background} relative transition-all duration-500`}
    >
      {/* Animated Background Elements */}
      <AnimatedBackground />

      <ThemeSelector />

      {/* Navigation */}
      <Header
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      {/* Section Indicator */}
      <SectionIndicator
        sections={sections}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      {/* Sections Container */}
      <div className="relative z-10 h-full">
        <div
          className="flex flex-col transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateY(-${currentSection * 100}vh)` }}
        >
          {/* Intro Section */}
          <IntroSection scrollToSection={scrollToSection} />

          {/* About Section */}
          <AboutSection />

          {/* Work Section */}
          <WorkSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Mobile App Projects Section */}
          <MobileAppSection />

          {/* Elixir Section */}
          <ElixirSection />

          {/* Elixir Projects */}
          <ElixirProjects />

          {/* Practice Projects */}
          <PracticeProjects />
          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
