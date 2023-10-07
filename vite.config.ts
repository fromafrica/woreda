import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'

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
		rollupOptions:{
			external:[
				'react','react-dom'
			],
			output:{
				globals:{
					'react':'React',
					'react-dom':'ReactDOM'
				}
			}
		},
		sourcemap:true,
		emptyOutDir:true
	},
	plugins: [react(), dts({ rollupTypes: true })],
	css: {
		postcss: {
		plugins: [
			tailwindcss('./tailwind.config.js'),
		],
		},
	}
})
