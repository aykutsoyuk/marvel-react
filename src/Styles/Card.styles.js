export default {
    card_root: {
        display: 'flex',
        width: "550px",
        height: "180px",
        margin: "10px",
        cursor: "pointer",
        "@media only screen and (max-width: 1140px)": {
          width: "450px",
          height: "220px",
          },
        "@media only screen and (max-width: 940px)": {
          width: "90vw",
          height: "180px",
          },
        "@media only screen and (max-width: 500px)": {
          flexDirection: "column",
          height: "325px"
        },
      },
      card_details: {
        display: 'flex',
        flexDirection: 'column',
        position: "relative",
        backgroundColor: "black",
        color: "white",
      },
      card_content: {
          zIndex: 2,
          color: "white",
        flex: '1 0 auto',
      },
      card_media: {
        minWidth: 180,
        minHeight: 180,
      },
      card_background: {
        position: "absolute",
        opacity: 0.2,
      },
}