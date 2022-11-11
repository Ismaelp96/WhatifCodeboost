import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        red900: "#FF0000",
        red800: "#FF040D",
        white: "#FFFFFF",
        grey900: "#33303E",
        grey800: "#4E4B59",
        grey700: "#5F5C6B",
        grey600: "#7A7786",
        grey500: "#8C8A97",
        grey400: "#ACABB7",
        grey300: "#C6C5CE",
        grey200: "#E1E0E7",
      },
    },
    media: {
      bp1440: "(max-width: 1440px)",
      bp1366: "(max-width: 1366px)",
      bp1200: "(max-width: 1200px)",
      bp1150: "(max-width: 1150px)",
      bp991: "(max-width: 991px)",
      bp800: "(max-width: 800px)",
      bp768: "(max-width: 768px)",
      bp600: "(max-width: 600px)",
      bp560: "(max-width: 560px)",
      bp480: "(max-width: 480px)",
      bp320: "(max-width: 320px)",
    },
  });
