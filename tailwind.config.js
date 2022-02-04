module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /*sort*/
      primary: "#000000",
      /*hvid*/
      secondary: "#ffffff",
      /*gul*/
      third: "#F6FF10",
      /*blå*/
      fourth: "#0031FF",
      /*grå*/
      fifth: "#2A2B2E",
    },

    fontFamily: {
      oswald: "'Oswald', sans-serif;",
      montserrat: "'Montserrat', sans-serif;",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
