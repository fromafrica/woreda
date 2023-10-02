import type { Preview } from "@storybook/svelte";
import { withThemeByClassName } from "@storybook/addon-styling";
import "../src/app.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
      themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

export default preview;
