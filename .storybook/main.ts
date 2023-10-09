import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import analyze from 'rollup-plugin-analyzer'

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      build: {
        sourcemap: true,
        rollupOptions: {
          experimentalLogSideEffects: true,
          output: {
            format: 'esm',
            preserveModules: false,
            dir: 'storybook-static',
          },
          treeshake: {
              preset: 'recommended',
          },
        },
      },
      plugins: [analyze({ summaryOnly: true, showExports: true, limit: 30 } )],
    });
  },
};
export default config;
