import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import woreda from './woreda';

addons.setConfig({
  theme: woreda,
});