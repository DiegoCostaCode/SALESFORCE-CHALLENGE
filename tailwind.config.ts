import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        "shadow1":"-10px -20px 5px rgba(0, 0, 0, 0.26)",
        "shadow2":"25px 20px 5px rgba(0, 0, 0, 0.26)",
        "text":"0px 5px 10px rgba(0, 0, 0, 0.25)",
        "default":"0px 0px 15px rgba(0, 0, 0, 0.50)",
        "blue-shine":"0px 0px 5px rgba(23, 157, 216, 0.50)",
        "dark-shine":"0px 0px 10px rgba(15, 42, 93, 0.50)",
      },
      colors:
      {
        "primary":"#179DD8",
        "secondary":"#0F2A5D",
        "sf-green":"#3A8B54",
        "datacloud":"#3849DB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor:{
        "salesforce-base":"#179DD8",
        "salesforce-darkbase":"#0F2A5D",
      }
    },
  },
  plugins: [],
};
export default config;
