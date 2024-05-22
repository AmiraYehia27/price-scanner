/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#204839",
        red : '#d02229'
      },
      backgroundColor: {
        greySec: '#F4F6F5'
      },
      fontFamily: {
        MuseoSans: ['Rethink Sans', "sans-serif"]
      },
    },
  },
  plugins: [],
}

