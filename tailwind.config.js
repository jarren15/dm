/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: {
          1: '#B399D4',
          2: '#F5E1FD', 
          3: '#CE9DD9'
        },
        customText: {
          1: '#1c0f30',
          2: '#31135e', 
          3: '#491d8b'
        },
        button: {
          primary: {
            default: '#5d397b', 
            hover: '#856b9c'
          }
        }
      }
    },
  },
  plugins: [],
}

