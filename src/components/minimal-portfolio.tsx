"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ExternalLink,
  Mail,
  Linkedin,
  ArrowUpRight,
  Circle,
  MapPin,
  Calendar,
  Users,
  Code,
  Smartphone,
  Globe,
} from "lucide-react"
import { useState } from "react"

export default function MinimalPortfolio() {
  const [activeSection, setActiveSection] = useState("work")

  const experiences = [
    {
      period: "2021 - Present",
      company: "Tkxel",
      role: "Senior Software Engineer",
      description:
        "Developed high-quality mobile and web applications from scratch using React, React Native, TypeScript, and their ecosystems, creating apps that are used by millions of people worldwide. Collaborated closely with team members and stakeholders, providing guidance and support to ensure project success.",
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
        "Developed and deployed a complete web application product for the company, working from requirements gathering through implementation using robust technologies. Built user interfaces with various frontend frameworks while developing APIs using Elixir, Phoenix, and Ecto.",
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
        "Started development career focusing on learning and mastering fullstack technologies including React, Ruby on Rails, jQuery, Ajax, and Bootstrap. Built various web applications ranging from simple projects to more complex solutions as skills progressed.",
      highlights: [
        "Mastered fullstack development fundamentals",
        "Built diverse web applications",
        "Progressed from simple to complex projects",
        "Learned technology integration patterns",
      ],
      technologies: ["React", "Ruby on Rails", "jQuery", "Bootstrap"],
    },
  ]

  const projects = [
    {
      title: "Cafe Zupas",
      category: "Restaurant Chain Platform",
      description:
        "A fresh food restaurant chain platform specializing in protein bowls, soups, salads, and sandwiches. Built major item selection and customization module with complex UI for millions of users.",
      image: "restaurant",
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
    },
    {
      title: "Zimi Smart Home",
      category: "IoT Platform",
      description:
        "IoT-based smart home automation platform with light controllers, fan controllers, and dimmer switches. Built comprehensive admin dashboard and customer portal.",
      image: "iot",
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
    },
    {
      title: "MyQampus",
      category: "Educational Platform",
      description:
        "Comprehensive educational web application providing campus management and student services with modern interface and seamless user experience.",
      image: "education",
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
    },
    {
      title: "SISUpro",
      category: "Mobile Application",
      description:
        "Professional mobile application built with React Native, focusing on user experience and performance optimization.",
      image: "mobile",
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
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "React Native", "TypeScript", "Next.js", "HTML/CSS"] },
    { category: "State Management", items: ["Redux", "Zustand", "React Query"] },
    { category: "Testing", items: ["React Testing Library", "Cypress", "Jest"] },
    { category: "Backend", items: ["Elixir", "Phoenix", "PostgreSQL", "Ruby on Rails"] },
    { category: "Architecture", items: ["Clean Architecture", "Application Performance", "Code Quality"] },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light">Talha Ashraf</div>
            <div className="flex gap-8 text-sm">
              <button
                onClick={() => setActiveSection("work")}
                className={`hover:text-gray-600 transition-colors ${activeSection === "work" ? "text-gray-900 font-medium" : ""}`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`hover:text-gray-600 transition-colors ${activeSection === "projects" ? "text-gray-900 font-medium" : ""}`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection("about")}
                className={`hover:text-gray-600 transition-colors ${activeSection === "about" ? "text-gray-900 font-medium" : ""}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`hover:text-gray-600 transition-colors ${activeSection === "contact" ? "text-gray-900 font-medium" : ""}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 uppercase tracking-wider">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">Senior Frontend Developer</h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8 max-w-3xl">
              I create digital experiences that matter. Specializing in React & React Native development with 5+ years
              of experience building applications used by millions worldwide.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span>Millions of users impacted</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>5+ years experience</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full px-8 py-3 text-base">
                View Work <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" className="rounded-full px-8 py-3 text-base">
                <Mail className="mr-2 w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        {activeSection === "work" && (
          <section className="py-20">
            <div className="flex items-center gap-4 mb-16">
              <Circle className="w-2 h-2 fill-current" />
              <h2 className="text-sm uppercase tracking-wider text-gray-600">Work Experience</h2>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <Badge variant="outline" className="mb-4 rounded-full text-xs">
                          {exp.period}
                        </Badge>
                        <h3 className="text-2xl font-light mb-2">{exp.role}</h3>
                        <p className="text-lg text-gray-600 mb-4">{exp.company}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{exp.description}</p>

                        <div className="space-y-3">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {activeSection === "projects" && (
          <section className="py-20">
            <div className="flex items-center gap-4 mb-16">
              <Circle className="w-2 h-2 fill-current" />
              <h2 className="text-sm uppercase tracking-wider text-gray-600">Featured Projects</h2>
            </div>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div
                      className={`aspect-[4/3] rounded-lg flex items-center justify-center ${
                        project.image === "restaurant"
                          ? "bg-gradient-to-br from-orange-100 to-red-200"
                          : project.image === "iot"
                            ? "bg-gradient-to-br from-blue-100 to-indigo-200"
                            : project.image === "education"
                              ? "bg-gradient-to-br from-green-100 to-emerald-200"
                              : "bg-gradient-to-br from-purple-100 to-pink-200"
                      }`}
                    >
                      {project.image === "restaurant" && <Globe className="w-16 h-16 text-orange-400" />}
                      {project.image === "iot" && <Code className="w-16 h-16 text-blue-400" />}
                      {project.image === "education" && <Users className="w-16 h-16 text-green-400" />}
                      {project.image === "mobile" && <Smartphone className="w-16 h-16 text-purple-400" />}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                    <Badge variant="outline" className="mb-4 rounded-full">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-light mb-4">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>

                    <div className="space-y-3 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 mb-8 flex-wrap">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links.live && (
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Site
                        </Button>
                      )}
                      {project.links.store && (
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <Smartphone className="w-4 h-4 mr-2" />
                          App Store
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About */}
        {activeSection === "about" && (
          <section className="py-20">
            <div className="flex items-center gap-4 mb-16">
              <Circle className="w-2 h-2 fill-current" />
              <h2 className="text-sm uppercase tracking-wider text-gray-600">About & Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-light mb-6">Background</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Looking for a frontend developer role where I can apply my technical skills to create engaging user
                    experiences. I'm eager to contribute to innovative web projects while continuing to grow
                    professionally in a dynamic environment.
                  </p>
                  <p>
                    I enjoy turning ideas into interactive applications and solving problems through clean, efficient
                    code that users love. Ready to bring creativity, dedication, and fresh perspectives to a
                    collaborative development team that values growth and innovation.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Education</h4>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <div className="text-sm text-gray-500 mb-1">2013 - 2018</div>
                    <div className="font-medium">Bachelor in Computer Science</div>
                    <div className="text-gray-600">Allama Iqbal Open University</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-light mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="outline" className="rounded-full">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        {activeSection === "contact" && (
          <section className="py-20">
            <div className="flex items-center gap-4 mb-16">
              <Circle className="w-2 h-2 fill-current" />
              <h2 className="text-sm uppercase tracking-wider text-gray-600">Get In Touch</h2>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-light mb-8">Let's work together</h3>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href="mailto:ta.xit@outlook.com" className="text-lg hover:text-gray-600 transition-colors">
                    ta.xit@outlook.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                  <a
                    href="https://www.linkedin.com/in/talha-ashraf-b57818273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-gray-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
