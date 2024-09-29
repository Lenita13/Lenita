/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#8e65c0',
        'custom-blue': '#e6f0f2', // Blueish color
      },
      textColor: {
        'custom-purple': '#8e65c0',
      },
      fontFamily: {
        'galano': ['Galano Classic', 'sans-serif'],
        'galano-alt': ['Galano Classic Alt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}