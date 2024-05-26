/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        headlineOswald: ['Oswald']
      },
      colors: {
        mainColor: '#212f49'
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

