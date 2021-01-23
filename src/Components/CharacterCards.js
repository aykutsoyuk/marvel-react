import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import styles from "../Styles/Card.styles.js";

const CharacterCards = (props) => {
  const { classes, character } = props;
  return (
    <div>
      <Card
        className={classes.card_root}
        onClick={() => {
          props.selectedCard(character);
          props.setDrawer(true);
        }}
      >
        <CardMedia
          className={classes.card_media}
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          title={character.name}
        />
        <div className={classes.card_details}>
          <img
            className={classes.card_background}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <CardContent className={classes.card_content}>
            <Typography
              style={{
                fontFamily: "comicFont",
                fontSize: "32px",
                textShadow: "1px 1px #ff0000",
              }}
              component="h5"
              variant="h5"
            >
              {character.name}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "12px", fontFamily: "Montserrat, sans-serif" }}
            >
              {character.description
                ? character.description.length > 170
                  ? character.description.substr(0, 170) + "..."
                  : character.description
                : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam laborum sint doloribus similique, atque necessitatibus iure esse nostrum..."}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default withStyles(styles)(CharacterCards);
