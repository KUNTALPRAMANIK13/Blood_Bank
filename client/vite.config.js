import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@fortawesome/fontawesome-svg-core":
        "@fortawesome/fontawesome-svg-core/dist/fontawesome-svg-core.esm.js",
      "@fortawesome/free-solid-svg-icons":
        "@fortawesome/free-solid-svg-icons/dist/free-solid-svg-icons.esm.js",
      "@fortawesome/react-fontawesome":
        "@fortawesome/react-fontawesome/dist/react-fontawesome.esm.js",
    },
  },
});
