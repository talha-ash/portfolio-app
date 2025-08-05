"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import { ThemeSelector } from "@/components/theme-selector";

export default function Blog() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

function Page() {
  const { currentTheme } = useTheme();

  const blogPosts: Post[] = [];

  const categories = [
    "All",
    "React Native",
    "TypeScript",
    "React",
    "Performance",
    "Architecture",
  ];

  return (
    <div
      className={`min-h-screen ${currentTheme.colors.background} transition-all duration-500`}
    >
      <ThemeSelector />

      {/* Header */}
      <header
        className={`${currentTheme.colors.surface} ${currentTheme.colors.border} border-b transition-all duration-500`}
      >
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <a href="/">
              <Button variant="ghost" size="sm" className="p-0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </a>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-light mb-4 ${currentTheme.colors.text}`}
          >
            Blog
          </h1>
          <p
            className={`text-xl ${currentTheme.colors.textSecondary} leading-relaxed`}
          >
            Thoughts on frontend development, React, React Native, and building
            great user experiences.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Categories */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full px-4 py-2 whitespace-nowrap cursor-pointer hover:bg-gray-900 hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2
            className={`text-2xl font-light mb-8 ${currentTheme.colors.text}`}
          >
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.length == 0 ? <h1>Not Yet</h1> : null}
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <a key={post.id} href={`/blog/${post.id}`}>
                  <Card
                    className={`h-full hover:shadow-lg transition-shadow cursor-pointer group ${currentTheme.colors.surface} ${currentTheme.colors.border}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge
                          variant="outline"
                          className="rounded-full text-xs"
                        >
                          {post.category}
                        </Badge>
                        <div
                          className={`flex items-center gap-2 text-sm ${currentTheme.colors.textSecondary}`}
                        >
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>

                      <h3
                        className={`text-xl font-medium mb-3 group-hover:${currentTheme.colors.textSecondary} transition-colors ${currentTheme.colors.text}`}
                      >
                        {post.title}
                      </h3>
                      <p
                        className={`${currentTheme.colors.textSecondary} leading-relaxed mb-4`}
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div
                          className={`flex items-center gap-2 text-sm ${currentTheme.colors.textSecondary}`}
                        >
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <ArrowRight
                          className={`w-4 h-4 ${currentTheme.colors.textSecondary} group-hover:${currentTheme.colors.text} transition-colors`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2
            className={`text-2xl font-light mb-8 ${currentTheme.colors.text}`}
          >
            All Posts
          </h2>
          <div className="space-y-6">
            {blogPosts.length == 0 ? <h1>Not Yet</h1> : null}
            {blogPosts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}`}>
                <Card
                  className={`hover:shadow-md transition-shadow cursor-pointer group ${currentTheme.colors.surface} ${currentTheme.colors.border}`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge
                            variant="outline"
                            className="rounded-full text-xs"
                          >
                            {post.category}
                          </Badge>
                          <div
                            className={`flex items-center gap-2 text-sm ${currentTheme.colors.textSecondary}`}
                          >
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          <div
                            className={`flex items-center gap-2 text-sm ${currentTheme.colors.textSecondary}`}
                          >
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3
                          className={`text-xl font-medium mb-2 group-hover:${currentTheme.colors.textSecondary} transition-colors ${currentTheme.colors.text}`}
                        >
                          {post.title}
                        </h3>
                        <p
                          className={`${currentTheme.colors.textSecondary} leading-relaxed`}
                        >
                          {post.excerpt}
                        </p>
                      </div>

                      <ArrowRight
                        className={`w-5 h-5 ${currentTheme.colors.textSecondary} group-hover:${currentTheme.colors.text} transition-colors shrink-0`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
