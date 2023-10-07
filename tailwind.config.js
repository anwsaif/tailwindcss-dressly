/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FBE3C9",
          300: "#F5CCAB",
          500: "#E09370",
          700: "#A14B38"
        },
        neutral: {
          100: "#F4F4F4",
          300: "#BDBDBD",
          900: "#12070B",
          500: "#262626",
          700: "#1B1314"
        },
        background: {
          900: "#E6E6E6"
        },
        danger: {
          500: "#FF4530"
        }
      }
    },
  },
  plugins: [],
}

