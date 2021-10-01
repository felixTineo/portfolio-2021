const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading': 'Oswald',
        'base': 'Quattrocento'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#1ad5ff',
          DEFAULT: '#00bee8',
          dark: '#0092b3'
        },
        secondary: {
          light: '#ec7994',
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
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontFamily: "Oswald", lineHeight: "5rem", },
        'h2': { fontSize: theme('fontSize.4xl'), fontFamily: "Oswald", lineHeight: "4rem", },
        'h3': { fontSize: theme('fontSize.3xl'), fontFamily: "Oswald", lineHeight: "3rem", },
        'html': {
          backgroundColor: "#000",
          scrollBehavior: "smooth",
          fontSize: "16px",
        },
        'body': {
          color: "#E4F1FE",
          fontFamily: "Quattrocento",
          letterSpacing: "2px",
          lineHeight: "2rem",
        },
        'button':{
          letterSpacing: "2px",
          lineHeight: "2rem",
        }
      })
    })
  ]
}
