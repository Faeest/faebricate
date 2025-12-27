module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Common display targets
        hd: "1280px",
        fhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
        "5k": "5120px",

        // Extra-large aliases for utility-friendly naming
        "7xl": "1920px",
        "8xl": "2560px",
        "9xl": "3200px",
        "10xl": "3840px",
        "11xl": "5120px",
      },
    },
  },
  plugins: [],
}