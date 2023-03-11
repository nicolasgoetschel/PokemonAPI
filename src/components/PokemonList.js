import React, { useState, useEffect } from "react";
import "../styles.css";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;

