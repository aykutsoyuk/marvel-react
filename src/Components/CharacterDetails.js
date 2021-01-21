import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, Button } from "@material-ui/core";
import styles from "../Styles/Details.styles.js";

const CharacterDetails = (props) => {
  const { classes, character, drawer, setDrawer } = props;
  return (
    <div>
      {character && (
        <React.Fragment key="right">
          <Drawer classes={{ paper: classes.drawer__paper }} anchor="right" open={drawer} onClose={() => setDrawer(false)}>
            <div
              className={classes.container__details}
              role="presentation"
              onClick={() => setDrawer(false)}
            >
                <img
                  className={classes.details__background}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                ></img>
              <div className={classes.details__media}>
                <h2 style={{ color: "white", fontFamily: "comicFont", fontSize: "40px", textShadow: "1px 1px #ff0000", }}>{character.name}</h2>
                <img
                  className={classes.details__img}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                ></img>
              </div>
              <div className={classes.details__description}>
                  {character.description ? (
                  <p style={{ color: "white" }}>{character.description}</p>
                  ):
                (<p style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta quisquam neque eum quasi quo nisi temporibus et est repudiandae, dolorem explicabo itaque consequuntur debitis minima fugit corporis possimus perspiciatis ipsum dolores voluptas suscipit repellendus incidunt. Expedita rem cupiditate velit beatae quo, nobis commodi, culpa quod sed a qui eligendi.
                    </p>
                )}
                </div>
              <div className={classes.details__events}></div>
            </div>
          </Drawer>
        </React.Fragment>
      )}
    </div>
  );
};

export default withStyles(styles)(CharacterDetails);
