import { styled } from "../../styles";

export const StyleCard = styled("div", {
  width: "100%",
  maxWidth: "28rem",
  "&:hover": {
    ".image": {
      img: {
        transform: "scale(1.05)",
      },
    },
    ".info": {
      h3: {
        color: "$red800",
      },
    },
  },
  a: {
    display: "block",
  },
  ".image": {
    width: "100%",
    height: "37.2rem",
    marginBottom: "1.6rem",
    borderRadius: "0.5rem",
    overflow: "hidden",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
  },
  ".info": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: "150%",
      color: "$white",
      marginBottom: "0.4rem",
      transition: "color 0.3s ease",
    },
    span: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: "150%",
      color: "$grey500",
    },
  },
});
