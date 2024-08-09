/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens:{
          sm: "480px",
          md: "768px",
          lg:"976px"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'orange': '#FFA500',
        'navyblue': '#000080',
        
      },

    },
  },
  plugins: [],
}