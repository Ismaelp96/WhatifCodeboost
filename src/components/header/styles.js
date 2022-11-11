import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const HeaderStyle = styled("header", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: "9.6rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  zIndex: "2022",
  [`${Container}`]: {
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".logo": {
    position: "relative",
    paddingLeft: "2.3rem",
    "&:after": {
      content: "",
      position: "absolute",
      backgroundColor: "$red800",
      boxShadow: "0px 2px 4px rgba(255, 4, 13, 0.16);",
      height: "0.1rem",
      width: "10.4rem",
      bottom: -28,
      left: 12,
    },
  },
  ".code": {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "0 2.3rem",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  },
  "@bp560": {
    ".logo": {
      paddingLeft: "1.8rem",
      img: {
        maxWidth: "90%",
      },
    },
    ".code": {
      paddingRight: "1.8rem",
      borderLeft: "none",
      img: {
        maxWidth: "90%",
      },
    },
  },
});
