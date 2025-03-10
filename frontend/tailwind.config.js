/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./frontend/**/*.{js,jsx}" // If you moved your files
  ],
  theme: {
    extend: {
      width: {
        "110":"480px"
      },
    },
  },
  plugins: [],
};