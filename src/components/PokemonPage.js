import {useEffect,useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonData , setPokemoneData ] = useState([])
  const [ searchTerm , setSearchTerm ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(r=>r.json())
    .then(setPokemoneData);
}, [])

  const onSearch = (searchString) => { 
    setSearchTerm(searchString)
  }
  const filterPokemon = pokemonData.filter((pokemon)=> {
    const lowerCaseName = pokemon.name.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearchTerm);
  });


  function onNewPokemon(newPokemon){
    setPokemoneData((currentPokemon)=>[...currentPokemon,newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon = {onNewPokemon} />
      <br />
      <Search onSearch = {onSearch} />
      <br />
      <PokemonCollection pokemon = {filterPokemon} />
    </Container>
  );
}

export default PokemonPage;
