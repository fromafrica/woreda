import type { StorybookConfig } from "@storybook/svelte-vite";
import { mergeConfig } from 'vite';

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
          preserveEntrySignatures: true,
          output: {
            format: 'esm', // set ES modules
            preserveModules: true,
            dir: 'dist',
          },
          treeshake: {
              preset: 'recommended',
          },
        },
      },
      plugins: [],
    });
  },
};
export default config;
