export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F8F2E9",
        porcelain: "#FFFDF8",
        moss: "#365443",
        sage: "#7E9A82",
        fern: "#143E31",
        rose: "#B97272",
        clay: "#B88967",
        ink: "#20231F",
        bark: "#6E5948"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(44, 57, 43, 0.12)",
        button: "0 14px 34px rgba(20, 62, 49, 0.22)"
      }
    }
  },
  plugins: []
};
