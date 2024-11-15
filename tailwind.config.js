/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ["Jersey 25", "sans-serif" ],
        roboto: ['Roboto'],
        jaro: ['Jaro'],
        rubik: ["Rubik Glitch"],
        tomo: ['Tomorrow'],
        montserrat: ["Montserrat"]
      },
      boxShadow: {
        'custom-dark': '10px 10px 0 rgba(0, 0, 0, 0.9)', // Darker shadow
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
};
