import { styled } from "../../styles";
import { Container } from "../../styles/global";

export const StyleFooter = styled("footer", {
  position: "relative",
  padding: "4rem 0",
  width: "100%",
  "&:before": {
    content: "",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: "0.1rem",
    width: "100%",
    backgroundSize: "cover",
    top: 0,
    left: 0,
  },
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
      strong: {
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "150%",
        color: "$white",
      },
      p: {
        flex: 1,
        maxWidth: "59.3rem",
        fontWeight: 400,
        fontSize: "1.4rem",
        lineHeight: "150%",
        color: "$grey500",
        marginLeft: "18.6rem",
      },
    },
  },
});
