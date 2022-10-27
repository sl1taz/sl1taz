/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F2FF',
        secondary: '#FF02FF',
        dark: '#252728',
        light: '#dedede',
        text: '#94a5af',
        success: '#1c1'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']        
      },

    },
  },
  plugins: [require('@tailwindcss/typography'),],
}