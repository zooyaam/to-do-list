/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ADC4CE",
        secondary: "#96B6C5",
        tertiary: "#EEE0C9",
        background: "#F1F0E8",
      },
    },
  },
  plugins: [],
};
