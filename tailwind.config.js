/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "510px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      }
    },
    extend: {
      colors: {
        primary: {
          "100": "#25a0f7",
          "200": "#5581fa",
        }
      },
    },
  },
  plugins: [],
}