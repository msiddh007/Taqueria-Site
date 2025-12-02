/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B', // gold
        secondary: '#111827', // near-black
        accent: '#DC2626' // chili red
      },
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','Arial','Noto Sans','sans-serif'],
        body: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Inter','Arial','Noto Sans','sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
