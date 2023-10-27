/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        ForestGreen: "#013A20",

        EmeraldGreen: "#478C5C",

        Lint: "#BACC81",

        LintLight: "#CDD193",
      },
    },
  },
  plugins: [require("daisyui")],
};
