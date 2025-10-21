// tailwind.config.js (à placer à la racine de mon-site-culturel/)

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Cette ligne est cruciale : elle dit à Tailwind de scanner tout dans le dossier 'src'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}