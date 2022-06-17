/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {},
    colors: {
      brand: '#3772FF',
      white: '#ffffff',
      'white-200': '#F9F9F9',
      black: '#0C0C0C',
      gray: '#EBEBEB',
      'gray-200': '#737373',
      overlay: 'rgba(0,0,0,.4)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
