const colors = require('tailwindcss/');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      main: '#050005',
      frame: '#1c3d46',
      grey: '#474c52',
      purple: '#4D194D',
      white: '#E9ECEF',
      fontFamily: {
        lora: 'Lora, serif',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: '#050005',
    }),
    textColor: (theme) => theme('colors'),
    textColor: {
      grey: '#474c52',
      white: '#E9ECEF',
      green: '#006466',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      white: '#E9ECEF',
      green: '#006466',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
