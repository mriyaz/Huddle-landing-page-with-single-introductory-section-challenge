/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "hsl(257, 40%, 49%)",
        "primary-soft-magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        'custom-headings': ['Poppins', 'sans-serif'],
        'custom-body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

