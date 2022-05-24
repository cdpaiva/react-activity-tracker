const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          border: '.125rem solid black',
        },
        '.btn-disabled': {
          border: '.125rem solid slategray',
          backgroundColor: 'lightgray',
          color: 'slategray',
          cursor: 'not-allowed'
        },
        '.btn-primary': {
          border: '.125rem solid rgb(134,239,172)',
          '&:hover': {
            backgroundColor: 'rgb(134,239,172)',
            color: 'white'
          }
        },
        '.btn-secondary': {
          border: '.125rem solid blue',
          '&:hover': {
            backgroundColor: 'blue',
            color: 'white'
          }
        },
        '.btn-warning': {
          border: '.125rem solid goldenrod',
          '&:hover': {
            backgroundColor: 'goldenrod',
            color: 'white'
          }
        }
      })
    })
  ],
}
