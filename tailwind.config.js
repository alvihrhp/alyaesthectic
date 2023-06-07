/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#38BEAC",
        "primary-light": "#E4F2F0",
        "primary-neutral": "#DFF0ED",
        "primary-lighter": "#E9F6F4",
        neutral: "#8E8E8E",
        "neutral-ket": "#F7F7F7",
        "neutral-90": "#393939",
        "neutral-80": "#575757",
        "neutral-70": "#696969",
        "neutral-light": "#FBFBFB",
      },
    },
  },
  plugins: [],
};
