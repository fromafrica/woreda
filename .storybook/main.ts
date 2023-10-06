import type { StorybookConfig } from "@storybook/svelte-vite";
import { mergeConfig } from 'vite';
import analyze from 'rollup-plugin-analyzer'

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
        sourcemap: false,
        rollupOptions: {
          experimentalLogSideEffects: true,
          output: {
            format: 'esm',
            preserveModules: false,
            dir: 'storybook-static',
          },
          manualChunks: (id) => {
            if (id.includes("node_modules")) {

                if (id.includes("@storybook/addon-docs")) {
                  return "vendor_storybook_docs";

                } else if (id.includes("@storybook/addon-styling")) {
                  return "vendor_storybook_styling";

                } else if (id.includes("@storybook/addon-essential")) {
                  return "vendor_storybook_essential";

                } else if (id.includes("@storybook/addon-links")) {
                  return "vendor_storybook_links";

                } else if (id.includes("@storybook/addon-interactions")) {
                  return "vendor_storybook_interactions";

                } else if (id.includes("@storybook/addon-toolbars")) {
                  return "vendor_storybook_toolbars";

                } else if (id.includes("@storybook/components")) {
                  return "vendor_storybook_components";
          
                } else if (id.includes("lodash")) {
                  return "vendor_lodash";
          
                } else if (id.includes("doctrine")) {
                  return "vendor_doctrine";
          
                } else if (id.includes("esutils")) {
                  return "vendor_esutils";
          
                } else if (id.includes("polished")) {
                  return "vendor_polished";
          
                } else if (id.includes("jest-mock")) {
                  return "vendor_jest_mock";
          
                } else if (id.includes("telejson")) {
                  return "vendor_telejson";
          
                } else if (id.includes("markdown-to-jsx")) {
                  return "vendor_markdown-to-jsx";
          
                } else if (id.includes("color-convert")) {
                  return "vendor_color-convert";
          
                } else if (id.includes("radix-ui")) {
                  return "vendor_radix-ui";
          
                } else if (id.includes("@sveltejs")) {
                  return "vendor_sveltejs";
          
                } else if (id.includes("babel")) {
                  return "vendor_babel";
          
                } else if (id.includes("webpack")) {
                  return "vendor_webpack";
          
                } else if (id.includes("vite")) {
                  return "vendor_vite";
          
                } else if (id.includes("uuid")) {
                  return "vendor_uuid";
          
                } else if (id.includes("browserify")) {
                  return "vendor_browserify";
          
                } else if (id.includes("memoizerific")) {
                  return "vendor_memoizerific";
                }


            
                return "vendor"; // all other package goes here
            }
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
