/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'bxl': '2180px',
      '2bxl': '2560px',
      '3bxl': '3072px',
    },
    extend: {
      colors: {
        darkblue: "#16232E",
        lightblue: "#63C3D1" ,
        midblue: "#245060",
      }
    },
  },
  plugins: [],
}

