import { useTheme } from "@/contexts/theme-context";

export const AnimatedBackground = () => {
  const { currentTheme } = useTheme();
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Shapes */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 ${currentTheme.effects.shape1} rounded-full blur-xl animate-float-slow`}
      ></div>
      <div
        className={`absolute top-3/4 right-1/4 w-80 h-80 ${currentTheme.effects.shape2} rounded-full blur-xl animate-float-medium`}
      ></div>
      <div
        className={`absolute bottom-1/4 left-1/3 w-48 h-48 ${currentTheme.effects.shape3} rounded-full blur-xl animate-float-fast`}
      ></div>
      <div
        className={`absolute top-1/2 right-1/3 w-56 h-56 ${currentTheme.effects.shape4} rounded-full blur-xl animate-float-slow`}
      ></div>

      {/* Geometric Shapes */}
      <div
        className={`absolute top-1/3 left-1/2 w-32 h-32 bg-linear-to-br ${currentTheme.effects.geometric1} rotate-45 animate-rotate-slow`}
      ></div>
      <div
        className={`absolute bottom-1/3 right-1/2 w-24 h-24 bg-linear-to-br ${currentTheme.effects.geometric2} rotate-12 animate-rotate-reverse`}
      ></div>

      {/* Moving Lines */}
      <div
        className={`absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-300/30 to-transparent animate-slide-down`}
      ></div>
      <div
        className={`absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-gray-300/30 to-transparent animate-slide-down-delayed`}
      ></div>

      {/* Floating Particles */}
      <div
        className={`absolute top-1/4 left-1/6 w-2 h-2 ${currentTheme.effects.particles} rounded-full animate-float-particle`}
      ></div>
      <div
        className={`absolute top-2/3 right-1/6 w-1.5 h-1.5 ${currentTheme.effects.particles} rounded-full animate-float-particle-delayed`}
      ></div>
      <div
        className={`absolute bottom-1/4 left-2/3 w-2.5 h-2.5 ${currentTheme.effects.particles} rounded-full animate-float-particle-slow`}
      ></div>

      {/* Code-like Elements */}
      <div
        className={`absolute top-1/5 right-1/5 ${currentTheme.effects.code} font-mono text-sm animate-fade-in-out`}
      >
        {"{ React }"}
      </div>
      <div
        className={`absolute bottom-1/5 left-1/5 ${currentTheme.effects.code} font-mono text-sm animate-fade-in-out-delayed`}
      >
        {"<TypeScript />"}
      </div>
      <div
        className={`absolute top-2/3 left-1/4 ${currentTheme.effects.code} font-mono text-sm animate-fade-in-out-slow`}
      >
        {"useState()"}
      </div>
    </div>
  );
};
