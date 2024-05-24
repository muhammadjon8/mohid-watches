/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg":   'linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%)'

      }
    },
  },
  plugins: [],
};
