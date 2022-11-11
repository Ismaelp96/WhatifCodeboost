import { styled } from "../../styles";

import bgThumbVideo from "../../assets/thumb-video.png";

export const StylePopupVideo = styled("div", {
  width: "100%",
  maxWidth: "31.2rem",
  span: {
    display: "block",
    fontWeight: 600,
    fontSize: "1.2rem",
    lineHeight: "1.8rem",
    letterSpacing: "0.095em",
    color: "$grey200",
    marginBottom: "1.4rem",
  },
  button: {
    width: "100%",
    height: "17.9rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${bgThumbVideo.src}) no-repeat center center`,
    borderRadius: "1rem",
    "&:hover": {
      "& > div": {
        transform: "scale(1.1)",
      },
    },
    "& > div": {
      width: "4.7rem",
      height: "4.7rem",
      borderRadius: "50%",
      backgroundColor: "rgba(19, 19, 19, 0.8)",
      backdropFilter: "blur(2.5px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease",
      img: {
        marginLeft: "0.2rem",
      },
    },
  },
  "@bp800": {
    display: "none",
  },
});
