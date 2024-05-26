/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]

}

