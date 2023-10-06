import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

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
  plugins: [react(), dts({ rollupTypes: true })],
})
