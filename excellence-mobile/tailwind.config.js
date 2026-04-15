// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: "#F5F5F7",
          blue: "#0071E3",
          black: "#1D1D1F",
        }
      },
      boxShadow: {
        apple: "0 4px 12px rgba(0,0,0,0.08)",
      }
    },
  },
  plugins: [],
}
