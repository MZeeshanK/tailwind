module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '576px',
      lg: '950px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightViolet: '#b166e5',
        darkViolet: '#3c1361',
        veryDarkViolet: '#301934',
        lightBlue: '#69a8f5',
        blue: '#1e7df0',
        darkBlue: '#1d2570',
        veryDarkBlue: '#00001a',
        softRed: '#ec0033',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
