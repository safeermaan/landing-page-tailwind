/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5C6AC4",
        "bookmark-red": "#FF6B6B",
        "bookmark-blue": "#1E2A38",
        "bookmark-grey": "#A0A3B1",
        "bookmark-white": "#F8FAFC",
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}