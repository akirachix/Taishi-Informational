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
        'is':{'max': '550', 'min':'700'},
        ns:'1024px',
        dt:'1300px',
        sp: '280px',
        nh: { 'raw': '(min-width: 1020px) and (max-width: 1024px), (min-width: 1280px) and (max-width: 1280px)' },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

        fontFamily: {
          josefin: ['"Josefin Sans"', 'sans-serif'],
        }
    },
  },
  plugins: [],
};
export default config;