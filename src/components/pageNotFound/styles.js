import { styled } from "../../styles";
import { Container } from "../../styles/global";

import BgHero from "../../assets/bg-hero.jpg";

export const StylePageNotFound = styled("section", {
  paddingTop: "19.1rem",
  background: `url(${BgHero.src}) no-repeat top center`,
  backgroundSize: "cover",
  position: "relative",
  height: "103.8rem",
  zIndex: 1,
  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: -1,
  },
  ".text": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "7.2rem",
    h1: {
      fontWeight: 600,
      fontSize: "4.9rem",
      lineHeight: "120%",
      textAlign: "center",
      marginBottom: "2.4rem",
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "150%",
      textAlign: "center",
      marginBottom: "4rem",
      maxWidth: "64.1rem",
    },
    a: {
      display: "inline-block",
      padding: "0 7.3rem",
      borderRadius: "0.5rem",
      backgroundColor: "$red900",
      color: "$white",
      fontSize: "1.6rem",
      fontWeight: 600,
      lineHeight: "5.4rem",
      transition: "filter 0.3s ease",
      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
  },
});
