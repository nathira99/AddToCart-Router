/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',   // blue-600
        secondary: '#9333ea', // purple-600
        accent: '#f59e0b',    // amber-500
      },
    },
  },
  plugins: [],
}
