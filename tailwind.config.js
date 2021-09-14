const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#1ad5ff',
          DEFAULT: '#00bee8',
          dark: '#0092b3'
        },
        secondary: {
          light: '#ef8fa6',
          DEFAULT: '#e86180',
          dark: '#e2365e'
        },
        tertiary:{
          light: '#ede45e',
          DEFAULT: '#e8dd33',
          dark: '#cfc217'
        }
      }       
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl'), fontFamily: "Oswald" },
        'h2': { fontSize: theme('fontSize.2xl'), fontFamily: "Oswald" },
        'h3': { fontSize: theme('fontSize.xl'), fontFamily: "Oswald" },
        'html': {
          backgroundColor: "#000",
          scrollBehavior: "smooth",
          fontSize: "18px",
        },
        'body': {
          color: "#E4F1FE",
          fontFamily: "Quattrocento",
          letterSpacing: "4px",
          lineGeight: "2rem",
        }
      })
    })
  ]
}
