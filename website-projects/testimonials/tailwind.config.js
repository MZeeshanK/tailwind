module.exports = {
  content: ['./*.html'],
  screen: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
