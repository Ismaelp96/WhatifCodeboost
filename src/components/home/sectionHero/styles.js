import { styled } from "../../../styles";
import { Container } from "../../../styles/global";

import BgHero from "../../../assets/bg-hero.jpg";

export const SectionHeroStyle = styled("section", {
  position: "relative",
  zIndex: 1,
  width: "100%",
  height: "73.1rem",
  background: `url(${BgHero.src}) no-repeat top center`,
  backgroundAttachment: "fixed",
  paddingTop: "9.6rem",
  display: "flex",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30rem",
    backgroundImage: "linear-gradient(transparent, #000000)",
    zIndex: -1,
  },
});

export const AreaSocial = styled("div", {
  width: "7.2rem",
  height: "100%",
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ul: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    li: {
      "&:not(:last-child)": {
        marginBottom: "3.2rem",
      },
      a: {
        display: "block",
        transition: "filter 0.3s ease",
        "&:hover": {
          filter: "brightness(0.8)",
        },
      },
    },
  },
});

export const ContentText = styled("div", {
  height: "100%",
  paddingLeft: "9.6rem",
  paddingRight: "7.1rem",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flex: 1,
  paddingBottom: "3.1rem",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ".left": {
    flex: 1,
    maxWidth: "57.4rem",
    paddingBottom: "10.1rem",
    h3: {
      fontWeight: 700,
      fontSize: "1.4rem",
      lineHeight: "150%",
      letterSpacing: " 0.095em",
      color: "#FFA800",
      marginBottom: "0.8rem",
    },
    h1: {
      fontWeight: 600,
      fontSize: "6.1rem",
      lineHeight: "116%",
      color: "$white",
      marginBottom: "2.4rem",
      maxWidth: "40rem",
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "150%",
      color: "$grey200",
      maxWidth: "49rem",
      marginBottom: "3.2rem",
    },
    a: {
      display: "inline-block",
      padding: "0 5.2rem",
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
  "@bp991": {
    paddingLeft: "3.6rem",
    paddingRight: "3.1rem",
  },
  "@bp800": {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    ".left": {
      paddingBottom: "7rem",
      width: "100%",
      maxWidth: "100%",
    },
  },
  "@bp600": {
    ".left": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      h3: {
        textAlign: "center",
      },
      h1: {
        textAlign: "center",
        display: "block",
        margin: "0 auto",
        marginBottom: "2.4rem",
      },
      p: {
        textAlign: "center",
        maxWidth: "88%",
      },
      a: {
        margin: "0 auto",
      },
    },
  },
  "@bp480": {
    ".left": {
      paddingBottom: "6rem",
      h1: {
        fontSize: "4.8rem",
      },
      p: {
        fontSize: "1.4rem",
        maxWidth: "100%",
      },
    },
  },
});
