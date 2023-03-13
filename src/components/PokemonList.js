import React, { useState, useEffect } from "react";
import "../styles.css";

function PokemonList() {
  // Define state to hold the list of Pokemon from the API
  const [pokemon, setPokemon] = useState([]);

  // Fetch the list of Pokemon from the API when the component mounts
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <div className="pokemon-list">
      <ul>
        {pokemon.map((poke) => (
          // Map over the list of Pokemon and render a list item for each
          // Use the Pokemon's name as the key for each list item
          <li key={poke.name} className="pokemon-name">{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;