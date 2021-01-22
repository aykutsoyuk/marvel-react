import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  Typography,
  Link,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
} from "@material-ui/core";
import styles from "../Styles/Details.styles.js";

const CharacterDetails = (props) => {
  const { classes, character, drawer, setDrawer } = props;
  return (
    <div>
      {character && (
        <React.Fragment key={ window.innerWidth > 550 ? "right" : "bottom"}>
          <SwipeableDrawer
            classes={{ paper: classes.drawer__paper }}
            anchor={ window.innerWidth > 550 ? "right" : "bottom"}
            open={drawer}
            onClose={() => setDrawer(false)}
          >
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
                <h2
                  style={{
                    color: "white",
                    fontFamily: "comicFont",
                    fontSize: "40px",
                    textShadow: "1px 1px #ff0000",
                  }}
                >
                  {character.name}
                </h2>
                <img
                  className={classes.details__img}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                ></img>
              </div>
              <div className={classes.details__description}>
                {character.description ? (
                  <p style={{ color: "white" }}>{character.description}</p>
                ) : (
                  <p style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem dicta quisquam neque eum quasi quo nisi
                    temporibus et est repudiandae, dolorem explicabo itaque
                    consequuntur debitis minima fugit corporis possimus
                    perspiciatis ipsum dolores voluptas suscipit repellendus
                    incidunt. Expedita rem cupiditate velit beatae quo, nobis
                    commodi, culpa quod sed a qui eligendi.
                  </p>
                )}
              </div>
              <Typography className={classes.links__root}>
                <Link
                  className={classes.links}
                  href={character.urls.find((url) => url.type === "detail").url}
                  target="_blank"
                >
                  Marvel Details
                </Link>
                <Link
                  className={classes.links}
                  href={
                    character.urls.find((url) => url.type === "comiclink").url
                  }
                  target="_blank"
                >
                  Marvel Comics
                </Link>
              </Typography>
              <div className={classes.details__events}>
                <List className={classes.events__root} subheader={<li />}>
                  {[
                    character.comics,
                    character.events,
                    character.series,
                    character.stories,
                  ].map((section) => (
                    <li className={classes.list__section}>
                      <ul className={classes.list__ul}>
                        <ListSubheader className={classes.list__header}>
                          {section === character.comics
                            ? "Comics"
                            : section === character.events
                            ? "Events"
                            : section === character.series
                            ? "Series"
                            : "Stories"}
                        </ListSubheader>
                        {section.items.map((item) => (
                          <ListItem className={classes.list__item__root}>
                            <ListItemText classes={{ root: classes.item__root, primary: classes.item__primary }} primary={item.name} />
                          </ListItem>
                        ))}
                      </ul>
                    </li>
                  ))}
                </List>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
        // comics events series stories.items
      )}
    </div>
  );
};

export default withStyles(styles)(CharacterDetails);
