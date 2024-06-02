/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'outline-green' : 'rgb(62, 130, 105)',
        'custom-pink' : 'rgb(238, 178, 178)',
         'custom-box' :  'rgb(111, 166, 145)',
      },
      backgroundColor : {
        'custom-green' : '#1a202c',   
        'custom-blue' : 'rgb(142, 203, 245)',
       },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

