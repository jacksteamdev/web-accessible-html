import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import { join } from "path/posix";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Web Accessible HTML",
  version: "1.0.0",
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  content_scripts: [
    {
      js: ["src/content.ts"],
      matches: ["https://en.wikipedia.org/*"],
    },
  ],
  web_accessible_resources: [
    {
      matches: ["<all_urls>"],
      resources: ["sidebar.html"],
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: { sidebar: join(__dirname, "sidebar.html") },
    },
  },
  plugins: [react(), crx({ manifest })],
});
