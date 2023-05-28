import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Preview, Decorator } from '@storybook/react'
import { theme } from "../src/themes";
import React from "react";
// import * as NextImage from "next/image";
// import React from "react";

export const parameters = {
  actions: { argTypeRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s ease;
    color: #000;
  }

  ol, ul {
    list-style: none;
  }
`;

// ここの記述でstyled-componentsにthemeを提供している。
const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) =>
//     typeof props.src === "string" ? (
//       <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//     ) : (
//       <OriginalNextImage {...props} unoptimized />
//     ),
// });

// Object.defineProperty(NextImage, "__esModule", {
//   configurable: true,
//   value: true,
// });

export default preview;