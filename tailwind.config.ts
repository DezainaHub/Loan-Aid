import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_green: "#217065",
        secondary_green: "#114A43",
        accent_yellow: "#D8E28C",
        background_white: "#EAF3F2",
        background_light_gray: "#f8f8f8",
        stroke_gray: "#C8C8C8",
        text_black: "#263238",
        text_navyblue: "#293056",
        text_gray: "#5C6160",
      },
      backgroundImage: {
        gradient_green: "linear-gradient(303deg, #41A194 3.8%, #217065 46.96%, #1D5A50 90.12%)",
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;