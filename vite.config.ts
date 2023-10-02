import { defineConfig } from 'vite'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
		  // Could also be a dictionary or array of multiple entry points
		  entry: resolve(__dirname, 'src/main.ts'),
		  name: 'woreda',
		  // the proper extensions will be added
		  fileName: 'woreda',
		},
	},
	plugins: [svelte()],
	css:{
		postcss
	}
})
