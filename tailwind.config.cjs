/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "IBM-Mono": ['"IBM Plex Mono"', "monospace"],
        Roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
