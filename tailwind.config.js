/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Main: ["Source Serif Pro", "serif"],
      Sub: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        "prbly-black": "#000",
        "prbly-main": "#5D31FF",
        "prbly-white": "#fefefe",
        "prbly-green": "#AAE9BE",
        "prbly-accent": "#DEF241",
      },
      },
  },
  plugins: [],
}
