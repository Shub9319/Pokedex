import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonDisplay from "../pokemonDisplay/PokemonDisplay";
// import './pokemon.css';

const Pokemons = () => {
  const [pokemons, setpokemons] = useState(null);

  async function getpokemons() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setpokemons(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
     getpokemons();
  }, []);

  return (
    <div className="container" >
        <div className="row">
        {
            pokemons &&  pokemons.map(pokemon=>{
              return (
                <div className="col-4" key={pokemon.name}>
                  <PokemonDisplay pokemon={pokemon} />
                </div>
              );
            })
        }
        </div>
    </div>
  );
};

export default Pokemons;
