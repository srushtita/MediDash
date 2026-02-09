/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Medical Blue
        secondary: "#10b981", // Success Green
        dark: "#1e293b",    // Slate Dark
      }
    },
  },
  plugins: [],
}