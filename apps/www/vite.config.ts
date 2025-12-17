import { defineConfig } from "vite";

export default defineConfig({
	server: {
		proxy: {
			"/astro": {
				target: "http://localhost:3001",
				changeOrigin: true,
			},
			"/next": {
				target: "http://localhost:3002",
				changeOrigin: true,
			},
			"/react": {
				target: "http://localhost:3003",
				changeOrigin: true,
			},
		},
	},
});
