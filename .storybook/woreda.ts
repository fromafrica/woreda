import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  
    brandTitle: 'Woreda Design',
    brandImage: 'https://imagedelivery.net/df3B9WeNUoOIgow23u-QMQ/816551cb-3308-46e3-bbc1-b36aa9be1700/small',
    brandTarget: '_self',
  
    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',
  
    // UI
    appBg: '#FFF',
    appContentBg: '#EFEFEF',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,
  
    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',
  
    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',
  
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
  });