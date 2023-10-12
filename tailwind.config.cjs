/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#FBB03B",
      brown: "#4D3A3B",
      white: "#fff",
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    },
    fontFamily: {
      zenMaru: ['Zen Maru Gothic', "sans-serif"], // 400, 500, 700
    },
    // extend: {
    //   spacing: {
    //     "8xl": "96rem",
    //     "9xl": "128rem",
    //   },
    //   borderRadius: {
    //     "4xl": "2rem",
    //   },
    // },
    extend: {
      boxShadow: {
        'sm': '2px 2px 4px 0 rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
};
