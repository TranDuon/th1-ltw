import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createApiApp } from "./apiServer.js";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "photo-api-middleware",
      configureServer(server) {
        server.middlewares.use(createApiApp());
      },
    },
  ],
  server: {
    host: true,
    port: 3000,
    // CodeSandbox / preview URL (*.csb.app) — Vite 5+ mặc định chặn host lạ
    allowedHosts: true,
  },
});
