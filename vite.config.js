import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Chemin vers le dossier contenant index.html
  plugins: [
    legacy({
      targets: "last 2 versions, not dead, > 0.2%",
    }),
  ],
  build: {
    outDir: "../dist", // Chemin vers le dossier de sortie
  },

  // Chemin vers le dossier de sortie
});
