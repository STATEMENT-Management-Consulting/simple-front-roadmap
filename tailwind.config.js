/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      yellow: {
        500: "#FBBF24",
      },
    },
  },
  plugins: [],
};
