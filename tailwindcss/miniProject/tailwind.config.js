/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        headlineOswald: ['Oswald']
      }
    },
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]

}

