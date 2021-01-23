export default {
  drawer__paper: {
    backgroundColor: "black",
    overflowY: "unset",
    overflowX: "hidden",
    minHeight: "-webkit-fill-available",
  },

  container__details: {
    width: "550px",
    height: "100%",
    backgroundColor: "black",
    position: "relative",
    "@media only screen and (max-width: 550px)": {
      width: "unset",
    },
  },

  details__background: {
    position: "absolute",
    opacity: 0.1,
    minHeight: "100%",
    backgroundRepeat: "repeat-y",
    display: "none",
  },

  details__media: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
    textAlign: "center",
  },

  details__img: {
    width: 160,
    height: 160,
    border: "2px solid white",
    borderRadius: "50%",
    marginTop: "20px",
  },

  details__description: {
    fontSize: "16px",
    lineHeight: "24px",
    padding: "20px 32px",
    textAlign: "justify",
    backgroundColor: "black",
    fontFamily: "Montserrat, sans-serif",
  },

  links__root: {
    cursor: "pointer",
    textAlign: "center",
  },

  links: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    margin: "0px 10px 10px 10px",
    color: "#338cf1",
  },

  events__root: {
    width: "100%",
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
    marginTop: "20px",
  },
  list__section: {
    backgroundColor: "inherit",
  },
  list__ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  list__header: {
    fontFamily: "comicFont",
    fontSize: "28px",
    color: "#ff0000",
    textShadow: "0.5px 0.5px white",
    padding: "0px 30px",
    letterSpacing: "2px",
    lineHeight: "24px",
  },

  list__item__root: {
    padding: "0px 32px",
  },

  item__root: {
    padding: 0,
  },

  item__primary: {
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    color: "white",
  },
};
