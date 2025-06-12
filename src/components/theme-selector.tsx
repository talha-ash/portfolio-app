"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ThemeSelector() {
  const { currentTheme, setTheme, themes } = useTheme()
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  return (
    <div className="fixed top-20 right-8 z-50">
      <div className="relative">
        <Button
          onClick={() => setShowThemeSelector(!showThemeSelector)}
          variant="outline"
          size="icon"
          className={`${currentTheme.colors.surface} ${currentTheme.colors.border} hover:shadow-lg transition-all`}
        >
          <Palette className="w-4 h-4" />
        </Button>

        {showThemeSelector && (
          <div
            className={`absolute top-12 right-0 ${currentTheme.colors.surface} ${currentTheme.colors.border} border rounded-lg shadow-xl p-4 w-64 transition-all`}
          >
            <h3 className={`text-sm font-medium ${currentTheme.colors.text} mb-3`}>Choose Theme</h3>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme)
                    setShowThemeSelector(false)
                  }}
                  className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                    currentTheme.id === theme.id ? "border-blue-500 shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${theme.colors.accent.replace("bg-", "bg-")}`}></div>
                    <span className="text-xs font-medium">{theme.name}</span>
                  </div>
                  <div className="flex gap-1">
                    <div
                      className={`w-4 h-4 rounded ${theme.effects.shape1.replace("/20", "/40").replace("/30", "/40")}`}
                    ></div>
                    <div
                      className={`w-4 h-4 rounded ${theme.effects.shape2.replace("/20", "/40").replace("/30", "/40")}`}
                    ></div>
                    <div
                      className={`w-4 h-4 rounded ${theme.effects.shape3.replace("/20", "/40").replace("/30", "/40")}`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
