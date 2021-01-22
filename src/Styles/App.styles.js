export default {
    header__search: {
        width: "100%",
        margin: "0px 20px",
        "@media only screen and (max-width: 600px)": {
            margin: "0px 0px 10px 0px",
            width: "60%",
          },
    },
    input__root : {
        color: "white",
        borderRadius: "20px",
        padding: "15px 15px",
        fontSize: "20px",
        fontFamily: "Montserrat, sans-serif",
        border: "2px solid white",
        "&:focus": {
            outline: "none"
        }
    },
    input__field : {
        padding: 0,
    }
}