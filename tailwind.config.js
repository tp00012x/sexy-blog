const COLORS = {
  MAIN: '#050005',
  FRAME: '#1c3d46',
  GREY: '#474c52',
  PURPLE: '#4D194D',
  WHITE: '#E9ECEF',
  GREEN: '#006466',
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      main: COLORS.MAIN,
      frame: COLORS.FRAME,
      grey: COLORS.GREY,
      purple: COLORS.PURPLE,
      white: COLORS.WHITE,
      fontFamily: {
        lora: 'Lora, serif',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: COLORS.MAIN,
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      grey: COLORS.GREY,
      white: COLORS.WHITE,
      green: COLORS.GREEN,
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      white: COLORS.WHITE,
      green: COLORS.GREEN,
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
