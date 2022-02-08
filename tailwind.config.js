const COLORS = {
  MAIN: '#050005',
  FRAME: '#1c3d46',
  GRAY: '#474c52',
  DARKGRAY: '#171717',
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
      gray: COLORS.GRAY,
      purple: COLORS.PURPLE,
      white: COLORS.WHITE,
      fontFamily: {
        lora: 'Lora, serif',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: COLORS.MAIN,
      gray: COLORS.GRAY,
      darkgray: COLORS.DARKGRAY,
      green: COLORS.GREEN,
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      gray: COLORS.GRAY,
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
