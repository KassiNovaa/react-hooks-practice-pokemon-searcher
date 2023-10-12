import {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onNewPokemon}) {

  const [ newName , setNewName ] = useState('')
  const [ newSpirtesFront , setNewSpritesFront ] = useState('')
  const [ newSpirtesBack , setNewSpritesBack ] = useState('')
  const [ newHp , setNewHp ] = useState(0)

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleSpirtesFront = (e) => {
    setNewSpritesFront(e.target.value);
  };

  const handleSpirtesBack = (e) => {
    setNewSpritesBack(e.target.value);
  };

  const handleHp = (e) => {
    setNewHp(e.target.value);
  };
  console.log(newHp,'im here')

  function handleSubmit(e) {
    e.preventDefault();
    const newPokemonSubmitted = {
      name : newName,
      hp : newHp,
      sprites : {
        front : newSpirtesFront,
        back : newSpirtesBack
      }
    };

    fetch('http://localhost:3000/pokemon', {
    method : "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(newPokemonSubmitted),
    })
    .then((r) => {
      if(r.ok) {
        return r.json();
      }
    })
  
    .then((newPokemonFromServer) => {

      onNewPokemon(newPokemonFromServer);
      setNewName("");
      setNewHp(0);
      setNewSpritesFront("");
      setNewSpritesBack("");
    })
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newName} onChange={handleName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newHp} onChange={handleHp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newSpirtesFront}
            onChange={handleSpirtesFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newSpirtesBack}
            onChange={handleSpirtesBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
