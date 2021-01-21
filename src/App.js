import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import logo from "./Assets/logo.svg";
import { TextField } from "@material-ui/core";
import styles from "./Styles/App.styles.js";
import "./App.css";
import md5 from "md5";
import CharacterDetails from "./Components/CharacterDetails";
import Characters from "./Components/Characters";

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const API_URL = "https://gateway.marvel.com/v1/public/";
const ts = "1";
const md5Doc = md5(`${ts}${privateKey}${publicKey}`);
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5Doc}`;

const App = (props) => {
  const { classes } = props;
  const [characters, setCharacters] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    !characters && GetInitialCharacters();
  }, [characters]);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const GetInitialCharacters = () => {
    fetch(`${API_URL}/characters?orderBy=-modified&${auth}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCharacters(result.data.results))
      .catch((error) => console.log("error", error));
  };

  const getCharacters = (keyword) => {
    if (keyword) {
      fetch(
        `${API_URL}/characters?${auth}&limit=20&nameStartsWith=${keyword}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setCharacters(result.data.results))
        .catch((error) => console.log("error", error));
    } else {
      setCharacters(null);
    }
  };

  const handleSearch = (e) => {
    getCharacters(e.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <img src={logo} style={{ width: "180px" }} alt="Marvel Logo" />
        </div>
        <div className={classes.header__search}>
          <TextField
            InputProps={{ classes: {root : classes.input__root, input: classes.input__field} }}
            fullWidth
            placeholder="Search for any character"
            variant="outlined"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="components">
       {characters ? <Characters characters={characters} selectedCharacter={setSelectedCharacter} setDrawer={setDrawer}/> : <span>No matches found</span>}
       {selectedCharacter && <CharacterDetails character={selectedCharacter} drawer={drawer} setDrawer={setDrawer}/>}
       </div>
    </div>
  );
}

export default withStyles(styles)(App);
