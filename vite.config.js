import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      components: "/src//components/",
      helpers: "/src//helpers/",
    },
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
