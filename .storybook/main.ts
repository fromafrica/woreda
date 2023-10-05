import type { StorybookConfig } from "@storybook/svelte-vite";
import { mergeConfig } from 'vite';
import { devDependencies } from '../package.json';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

function renderChunks(deps: Record<string, string>) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    chunks[key] = [key];
  });
  return chunks;
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      build: {
        sourcemap: true,
        rollupOptions: {
          treeshake: {
              preset: 'smallest',
          },
        },
      },
      plugins: [
        nodePolyfills(),
      ],
    });
  },
};
export default config;
