"use client"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Theme = {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
  }
  effects: {
    shape1: string
    shape2: string
    shape3: string
    shape4: string
    geometric1: string
    geometric2: string
    particles: string
    lines: string
    code: string
  }
}

export const themes: Theme[] = [
  {
    id: "minimal",
    name: "Minimal Gray",
    colors: {
      primary: "bg-gray-900",
      secondary: "bg-gray-600",
      accent: "bg-green-500",
      background: "bg-gray-50",
      surface: "bg-white",
      text: "text-gray-900",
      textSecondary: "text-gray-600",
      border: "border-gray-200",
    },
    effects: {
      shape1: "bg-blue-200/20",
      shape2: "bg-purple-200/20",
      shape3: "bg-green-200/20",
      shape4: "bg-orange-200/20",
      geometric1: "from-blue-300/10 to-purple-300/10",
      geometric2: "from-green-300/10 to-blue-300/10",
      particles: "bg-blue-400/40",
      lines: "bg-gray-300/30",
      code: "text-gray-300/20",
    },
  },
  {
    id: "ocean",
    name: "Ocean Blue",
    colors: {
      primary: "bg-blue-900",
      secondary: "bg-blue-600",
      accent: "bg-cyan-500",
      background: "bg-blue-50",
      surface: "bg-white",
      text: "text-blue-900",
      textSecondary: "text-blue-600",
      border: "border-blue-200",
    },
    effects: {
      shape1: "bg-cyan-200/30",
      shape2: "bg-blue-200/30",
      shape3: "bg-teal-200/30",
      shape4: "bg-indigo-200/30",
      geometric1: "from-cyan-300/15 to-blue-300/15",
      geometric2: "from-teal-300/15 to-cyan-300/15",
      particles: "bg-cyan-400/50",
      lines: "bg-blue-300/40",
      code: "text-blue-300/25",
    },
  },
  {
    id: "sunset",
    name: "Sunset Orange",
    colors: {
      primary: "bg-orange-900",
      secondary: "bg-orange-600",
      accent: "bg-yellow-500",
      background: "bg-orange-50",
      surface: "bg-white",
      text: "text-orange-900",
      textSecondary: "text-orange-600",
      border: "border-orange-200",
    },
    effects: {
      shape1: "bg-orange-200/30",
      shape2: "bg-red-200/30",
      shape3: "bg-yellow-200/30",
      shape4: "bg-pink-200/30",
      geometric1: "from-orange-300/15 to-red-300/15",
      geometric2: "from-yellow-300/15 to-orange-300/15",
      particles: "bg-orange-400/50",
      lines: "bg-orange-300/40",
      code: "text-orange-300/25",
    },
  },
  {
    id: "forest",
    name: "Forest Green",
    colors: {
      primary: "bg-green-900",
      secondary: "bg-green-600",
      accent: "bg-emerald-500",
      background: "bg-green-50",
      surface: "bg-white",
      text: "text-green-900",
      textSecondary: "text-green-600",
      border: "border-green-200",
    },
    effects: {
      shape1: "bg-green-200/30",
      shape2: "bg-emerald-200/30",
      shape3: "bg-teal-200/30",
      shape4: "bg-lime-200/30",
      geometric1: "from-green-300/15 to-emerald-300/15",
      geometric2: "from-teal-300/15 to-green-300/15",
      particles: "bg-green-400/50",
      lines: "bg-green-300/40",
      code: "text-green-300/25",
    },
  },
  {
    id: "purple",
    name: "Royal Purple",
    colors: {
      primary: "bg-purple-900",
      secondary: "bg-purple-600",
      accent: "bg-pink-500",
      background: "bg-purple-50",
      surface: "bg-white",
      text: "text-purple-900",
      textSecondary: "text-purple-600",
      border: "border-purple-200",
    },
    effects: {
      shape1: "bg-purple-200/30",
      shape2: "bg-pink-200/30",
      shape3: "bg-indigo-200/30",
      shape4: "bg-violet-200/30",
      geometric1: "from-purple-300/15 to-pink-300/15",
      geometric2: "from-indigo-300/15 to-purple-300/15",
      particles: "bg-purple-400/50",
      lines: "bg-purple-300/40",
      code: "text-purple-300/25",
    },
  },
  {
    id: "dark",
    name: "Dark Mode",
    colors: {
      primary: "bg-white",
      secondary: "bg-gray-300",
      accent: "bg-blue-400",
      background: "bg-gray-900",
      surface: "bg-gray-800",
      text: "text-white",
      textSecondary: "text-gray-300",
      border: "border-gray-700",
    },
    effects: {
      shape1: "bg-blue-400/20",
      shape2: "bg-purple-400/20",
      shape3: "bg-green-400/20",
      shape4: "bg-orange-400/20",
      geometric1: "from-blue-400/15 to-purple-400/15",
      geometric2: "from-green-400/15 to-blue-400/15",
      particles: "bg-blue-400/60",
      lines: "bg-gray-400/30",
      code: "text-gray-400/30",
    },
  },
]

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[3])

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedThemeId = localStorage.getItem("portfolio-theme")
    if (savedThemeId) {
      const savedTheme = themes.find((theme) => theme.id === savedThemeId)
      if (savedTheme) {
        setCurrentTheme(savedTheme)
      }
    }
  }, [])

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme)
    localStorage.setItem("portfolio-theme", theme.id)
  }

  return <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
