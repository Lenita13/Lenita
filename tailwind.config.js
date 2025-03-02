// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#7742cc',
        'custom-blue': '#e6f0f2',
      },
      textColor: {
        'custom-purple': '#7742cc',
      },
      borderColor: {
        'custom-purple': '#7742cc',
      },
      fontFamily: {
        'galano': ['Galano Classic', 'sans-serif'],
        'galano-alt': ['Galano Classic Alt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}