import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const components = pokemon.map((pokemonobj) => (
    <PokemonCard key={pokemonobj.id} pokemon={pokemonobj} />
  ));
  return (
    <Card.Group itemsPerRow={6}>
      {components}
    </Card.Group>
  );
}

export default PokemonCollection;
