import React, { useState } from "react";
import "./styles.css";
import pokeballimg from "./images/background.jpg";

function App() {
  // Define state to hold the currently displayed Pokemon
  const [pokemon, setPokemon] = useState(null);

  // Function to fetch a random Pokemon from the API
  const getRandomPokemon = async () => {
    // Generate a random ID between 1 and 151
    const randomId = Math.floor(Math.random() * 151) + 1;
    // Send a GET request to the PokeAPI to retrieve the Pokemon data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    // Parse the response as JSON
    const data = await response.json();
    // Update the state with the new Pokemon data
    setPokemon(data);
  };

  return (
    <div
      className="App"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div className="container">
        <div className="title-container">
          <div className="title-frame"></div>
          <h1 className="title">
            <span className="red">Random Pokémon </span>
            <span className="blue">Generator</span>
          </h1>
        </div>
        {/* Button to generate a new random Pokemon */}
        <button className="pokeball-button" onClick={getRandomPokemon}>
          <img src={require("./images/background.jpg")} alt="Pokeball" />
        </button>
        {/* Display the currently generated Pokemon */}
        {pokemon && (
          <div className="pokemon-container">
            {/* Show the sprite of the Pokemon */}
            <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} />
            {/* Show the name of the Pokemon */}
            <h2 className="pokemon-name">{pokemon.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;