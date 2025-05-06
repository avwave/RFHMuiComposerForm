import type { Preview } from '@storybook/react';
import './pathMuiNames';

import "@fontsource/public-sans";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/material-icons';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import breakpoints from "../src/theme/breakpoints";
import componentsOverride from '../src/theme/overrides';
import palette from '../src/theme/palette';
import shadows, { customShadows } from '../src/theme/shadows';
import typography from '../src/theme/typography';

const preview: Preview = {
  parameters: {
    docs:{
      toc: true,
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;

const options = {
  typography,
  breakpoints,
  shape: {
    borderRadius: 8,
  },
  shadows: shadows.light,
  customShadows: customShadows.light,
}

const darkTheme = createTheme({
  ...options,
  palette: palette.dark,
  customShadows: customShadows.dark,
})
darkTheme.components = componentsOverride(darkTheme)

const lightTheme = createTheme({
  ...options,
  palette: palette.light,
})
lightTheme.components = componentsOverride(lightTheme)

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}