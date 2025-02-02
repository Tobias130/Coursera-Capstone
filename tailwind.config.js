/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
    },
    colors: {
      green: "#495e57",
      yellow: "#F4CE14",
      white: "#fff",
      secondary1: "#EE9972",
      secondary2: "#FBDABB",
      highlight1: "#EDEFEE",
      highlight2: "#333333",
    },
    fontSize: {
      base: [
        "14pt",
        {
          lineHeight: "1.5",
        },
      ],

      titleCard: [
        "18pt",
        {
          fontWeight: "bold",
        },
      ],
      heading: "40pt",
      subHeading: "18pt",
    },
    extend: {
      fontFamily: {
        markazi: ["Markazi Text", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
