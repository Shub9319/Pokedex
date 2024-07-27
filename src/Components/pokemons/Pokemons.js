import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
// import PokemonDisplay from "../pokemonCard/PokemonDisplay";
import './pokemon.css';
import Header from "../header/Header";

const PokemonDisplay = React.lazy(()=> import("../pokemonCard/PokemonDisplay"));
const Pokemons = () => {
  const [pokemons, setpokemons] = useState(null);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [types, setTypes] = useState();

  useEffect(() => {
    getpokemons();
  }, [url]);

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

  function sendPokemon(pokemon) {
    let poke = []
    pokemon.forEach(element => {
      poke.push(element.pokemon)
    });
    setpokemons(poke);
    setPrev(null);
    setNext(null);
  }

  (async function () {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(response.data.results);
    } catch (error) {
      console.log(error);
    }
  })();


  return (
    <>
      <Header types={types} sendPokemon={sendPokemon} />
      <div className="container">
        <div className="row">
          {pokemons &&
            pokemons.map((pokemon) => {
              return (
                <div className="col-4 my-3" key={pokemon.name}>
                  <Suspense fallback={<div>Loading....</div>}>
                  <PokemonDisplay pokemon={pokemon} />
                  </Suspense>
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
    </>
  );
};

export default Pokemons;
