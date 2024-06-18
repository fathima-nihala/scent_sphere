/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#562400",
        lbrown: "#A87149",
        black: "#1E1E1E",
        orange: "#FF3333",
        silvergray: "#c3c3c3",
        cloudGray: "#e5e5e5", // Updated key to remove space
        dgray: "#666666",
        lgray: "#d9d9d9",
      },
    },
  },
  plugins: [require("daisyui")],
}
