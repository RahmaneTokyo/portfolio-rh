/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'serif'],
        'fredoka-semi': ['Fredoka', 'semibold'],
      }
    },
  },
  plugins: [],
}
