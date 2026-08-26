import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        const isFramerClientDirective =
          warning.code === "MODULE_LEVEL_DIRECTIVE" &&
          typeof warning.message === "string" &&
          warning.message.includes("use client") &&
          warning.message.includes("node_modules/framer-motion");

        if (isFramerClientDirective) {
          return;
        }

        warn(warning);
      },
    },
  },
});
