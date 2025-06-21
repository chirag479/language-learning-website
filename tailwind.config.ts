import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#3b82f6",
        background: "#ffffff",
        foreground: "#0f172a",
        
        // Primary Blue
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        
        // Secondary - Light Blue
        secondary: {
          DEFAULT: "#eff6ff",
          foreground: "#3b82f6",
        },
        
        // Accent - Same as Primary
        accent: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        
        // Status Colors
        success: {
          DEFAULT: "#3b82f6",          /* Standard Blue */
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#60a5fa",         /* Lighter Blue */
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#1d4ed8",      /* Darker Blue */
          foreground: "#ffffff",
        },
        
        // UI Colors
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
