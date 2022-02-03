module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      third: "#F6FF10",
      fourth: "#0031FF",
    },

    fontFamily: {
      oswald: "'Oswald', sans-serif;",
      montserrat: "'Montserrat', sans-serif;",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
