import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonDisplay from "../pokemonCard/PokemonDisplay";
import './pokemon.css';

const Pokemons = () => {
  const [pokemons, setpokemons] = useState(null);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState()
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon")

  async function getpokemons() {
    try {
      const response = await axios.get(url);
      setpokemons(response.data.results);
      setPrev(response.data.previous);
      setNext(response.data.next);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
     getpokemons();
  }, [url]);

  return (
    <div className="container">
      <div className="row">
        {pokemons &&
          pokemons.map((pokemon) => {
            return (
              <div className="col-4 my-3" key={pokemon.name}>
                <PokemonDisplay pokemon={pokemon} />
              </div>
            );
          })}
      </div>
      <div className="buttons my-4">
        <button
          type="button"
          className="btn btn-warning btn-lg"
          onClick={() => {
            seturl(prev);
          }}
          disabled={!prev}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg"
          onClick={() => {
            seturl(next);
          }}
          disabled={!next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pokemons;
