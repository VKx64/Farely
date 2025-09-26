import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cta: "var(--cta)",
        text: "var(--main-text)",
        card: "var(--card)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
