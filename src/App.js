import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();
      setPokemonList(data.results);
    }
    fetchPokemon();
  }, []);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];
    setSelectedPokemon(randomPokemon);
  };

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <button onClick={handleRandomClick}>Random</button>
      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              selectedPokemon.url.split("/")[6]
            }.png`}
            alt={selectedPokemon.name}
          />
        </div>
      )}
    </div>
  );
}

export default App;
