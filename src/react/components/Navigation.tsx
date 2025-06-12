import { useTheme } from "@/contexts/theme-context";

export const Header = ({
  scrollToSection,
  currentSection,
}: {
  scrollToSection: (value: number) => void;
  currentSection: number;
}) => {
  const { currentTheme } = useTheme();

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.colors.background}/80 backdrop-blur-sm ${currentTheme.colors.border} border-b transition-all duration-500`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-light ${currentTheme.colors.text}`}>
              Talha Ashraf
            </div>
            <div className="flex gap-8 text-sm">
              <button
                onClick={() => scrollToSection(0)}
                className={`transition-colors ${
                  currentSection === 0
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(1)}
                className={`transition-colors ${
                  currentSection === 1
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(2)}
                className={`transition-colors ${
                  currentSection === 2
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection(3)}
                className={`transition-colors ${
                  currentSection === 3
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(4)}
                className={`transition-colors ${
                  currentSection === 4
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Elixir(Backend)
              </button>
              <button
                onClick={() => scrollToSection(5)}
                className={`transition-colors ${
                  currentSection === 5
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Elixir Projects
              </button>
              <button
                onClick={() => scrollToSection(6)}
                className={`transition-colors ${
                  currentSection === 6
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Practice Projects
              </button>
              <button
                onClick={() => scrollToSection(7)}
                className={`transition-colors ${
                  currentSection === 7
                    ? `${currentTheme.colors.text} font-medium`
                    : currentTheme.colors.textSecondary
                }`}
              >
                Contact
              </button>
              {/* <a
                href="/blog"
                className={`transition-colors ${currentTheme.colors.textSecondary}`}
              >
                Blog
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
