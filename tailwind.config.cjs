/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#FBB03B",
      accent: "#F7004C",
      brown: "#4D3A3B",
      white: "#fff",
      yellow: {
        10: "#FFFCEC",
        200: "#FFF3AA",
        500: "FFE978",
      },
      orange: {
        200: "#feebcd",
        300: "#fddba5",
        400: "#fbb84b",
        500: "#e69005",
        600: "#FBB03B",
        800: "#F29544",
      },
      gray: {
        50: "#f9fafb",
        100: "#f0f2f4",
        200: "#e1e5ea",
        300: "#cad0d8",
        400: "#95a1b2",
        500: "#637288",
        600: "#475262",
        700: "#333c47",
        800: "#1e2329",
        900: "#0f1115",
        950: "#090a0c",
      },
    },
    fontFamily: {
      ja: ["Zen Maru Gothic", "sans-serif"], // 400, 500, 700
      en: ["Comfortaa", "sans-serif"], // 500, 700
      enZen: ["Zen Dots", "sans-serif"], // 500, 700
    },
    extend: {
      boxShadow: {
        sm: "2px 2px 4px 0 rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        "2lg": "1224px",
      },
    },
  },
  plugins: [],
};
