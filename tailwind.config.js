/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      night: "#151319",
      "english-violet": "#494051",
      thistle: "#ccc3d5",
      "white-smoke": "#f2f2ef",
      khaki: "#c4b594",
      "dutch-white": "#ECDBB7",
    },
    extend: {},
  },
  plugins: [],
};
