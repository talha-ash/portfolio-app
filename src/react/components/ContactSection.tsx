import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";
import { Circle, FileText, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 shrink-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Circle
            className={`w-2 h-2 fill-current ${currentTheme.colors.text}`}
          />
          <h2
            className={`text-sm uppercase tracking-wider ${currentTheme.colors.textSecondary}`}
          >
            Get In Touch
          </h2>
        </div>

        <h3
          className={`text-5xl md:text-7xl font-light mb-8 ${currentTheme.colors.text}`}
        >
          Let's work together
        </h3>
        <p
          className={`text-xl md:text-2xl ${currentTheme.colors.textSecondary} mb-16 leading-relaxed max-w-3xl mx-auto`}
        >
          I'm always interested in new opportunities and collaborations. Whether
          you have a project in mind or just want to connect, I'd love to hear
          from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          <Card
            className={`p-8 hover:shadow-lg transition-shadow ${currentTheme.colors.surface}`}
          >
            <CardContent className="p-0 text-center">
              <Mail
                className={`w-8 h-8 ${currentTheme.colors.textSecondary} mx-auto mb-4`}
              />
              <h4 className={`font-medium mb-2 ${currentTheme.colors.text}`}>
                Email
              </h4>
              <a
                href="mailto:ta.xit@outlook.com"
                className={`${currentTheme.colors.textSecondary} hover:${currentTheme.colors.text} transition-colors`}
              >
                ta.xit@outlook.com
              </a>
            </CardContent>
          </Card>

          <Card
            className={`p-8 hover:shadow-lg transition-shadow ${currentTheme.colors.surface}`}
          >
            <CardContent className="p-0 text-center">
              <Linkedin
                className={`w-8 h-8 ${currentTheme.colors.textSecondary} mx-auto mb-4`}
              />
              <h4 className={`font-medium mb-2 ${currentTheme.colors.text}`}>
                LinkedIn
              </h4>
              <a
                href="https://www.linkedin.com/in/talhase/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.colors.textSecondary} hover:${currentTheme.colors.text} transition-colors`}
              >
                Connect with me
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          {/* <Button className="rounded-full px-8 py-3 text-base">
            <Mail className="mr-2 w-4 h-4" />
            Send Message
          </Button> */}
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

        <div className={`mt-12 pt-8 ${currentTheme.colors.border} border-t`}>
          <p className={`text-sm ${currentTheme.colors.textSecondary}`}>
            Currently available for freelance projects and full-time
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};
