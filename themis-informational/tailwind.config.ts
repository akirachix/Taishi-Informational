import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'im': {'min': '768px', 'max': '999px'},
        'nhm': {'min': '1280px'},
        'nh': {'min': '1000px', 'max': '1279px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
