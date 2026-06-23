import { defineConfig } from "vite";

export default defineConfig({
  base: "/cv-cluciani/",
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
