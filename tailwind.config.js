// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: process.env.PRIMARY_COLOR || 'blue',
      },
    },
    fontFamily: {
      sans: [process.env.FONT_FAMILY || 'Rubik', 'sans-serif'],
    },
  },
  plugins: [],
};