import CharacterCards from "./CharacterCards";

const Characters = (props) => {
  return (
    <div className="container__characters">
      {props.characters &&
        props.characters.map((character) => 
       <CharacterCards character={character} selectedCard={props.selectedCharacter} setDrawer={props.setDrawer}/>
        )}
    </div>
  );
};

export default Characters;
