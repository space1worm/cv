import * as path from "path";
import react from "@vitejs/plugin-react-swc";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@pages": path.resolve(__dirname, "./src/pages")
    }
  }
});
