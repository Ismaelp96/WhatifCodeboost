import { styled, globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    border: "none",
    fontFamily: "Poppins, sans-serif",
    outline: "none",
  },
  html: {
    fontSize: "62.5%",
    "@bp320": {
      fontSize: "55%",
    },
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "linear-gradient(119.36deg, #010101 0%, #000000 100%);",
    color: "$white",
    height: "100vh",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  button: {
    cursor: "pointer",
  },
  a: {
    textDecoration: "none",
  },
  li: {
    listStyle: "none",
  },
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1216,
  margin: "0 auto",
});
