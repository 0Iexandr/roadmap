/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '744px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
