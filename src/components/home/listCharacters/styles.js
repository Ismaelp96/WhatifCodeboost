import { styled } from "../../../styles";

export const StyleSectionCharacters = styled("section", {
  paddingTop: "5.6rem",
  paddingBottom: "7.2rem",
  ".title": {
    display: "flex",
    alignItems: "center",
    marginBottom: "5.6rem",
    span: {
      fontWeight: 400,
      fontSize: "1.8rem",
      lineHeight: "150%",
      color: "rgba(255, 255, 255, 0.4)",
      marginRight: "11.3rem",
    },
    h2: {
      position: "relative",
      maxWidth: "21.6rem",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: "140%",
      Color: "$white",
      paddingLeft: "1.6rem",
      "&:before": {
        content: "",
        position: "absolute",
        left: 0,
        top: 5.5,
        width: 2,
        height: 59,
        backgroundColor: "$red800",
      },
    },
  },
});

export const StyleListCharacters = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "4rem 3.3rem",
  ".marvel": {
    width: "28rem",
    height: "37.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
