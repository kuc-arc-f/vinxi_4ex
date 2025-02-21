import vue from '@vitejs/plugin-vue'
import { createApp } from "vinxi";

export default createApp({
	routers: [
		{
			name: "public",
			type: "static",
			dir: "./public",
		},
		{
			name: "client",
			type: "spa",
			handler: "./index.ts",
			target: "browser",
			plugins: () => [vue()],
		},
	],
});
