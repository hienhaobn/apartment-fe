import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    test: {
      passWithNoTests: true,
    },
    resolve: {
      alias: {
        "@/app": resolve(__dirname, "src", "app"),
        "@/components": resolve(__dirname, "src", "components"),
        "@/hooks": resolve(__dirname, "src", "hooks"),
        "@/lib": resolve(__dirname, "src", "lib"),
        "@/routes": resolve(__dirname, "src", "routes"),
        "@/types": resolve(__dirname, "src", "types"),
        "@/utils": resolve(__dirname, "src", "lib", "utils"),
        "@/assets": resolve(__dirname, "public", "assets"),
        "@/styles": resolve(__dirname, "src", "styles"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
