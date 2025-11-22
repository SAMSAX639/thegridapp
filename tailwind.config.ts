// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brigends: ["var(--font-brigends)"],
        lexend: ["var(--font-lexend)"],
      },
    },
  },
  plugins: [], // ⬅️ do NOT put daisyui here in v5
};

export default config;
