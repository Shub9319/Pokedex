import React, { useEffect, useState } from "react";
import PokemonDetails from "../pokemonDetails/PokemonDetails";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

function PokemonDisplay({ pokemon }) {
  const [types, setTypes] = useState();

  function getID() {
    return pokemon.url.substring(34, pokemon.url.length - 1);
  }
  const id = getID();
  
  (async function getType() {
    try {
      const response = await axios.get(pokemon.url);
      setTypes(response.data.types);
    } catch (error) {
      console.log(error);
    }
  })();

  // axios
  //   .get(pokemon.url)
  //   .then(function (response) {
  //     setTypes(response.data.types);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <div>
      <div className="card bg-info" style={{ width: "18rem" }}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          className="card-img-top"
          alt={pokemon.name}
          height="200px"
          width="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
          <p>
            <b>Pokemon Id: {id}</b>
          </p>
          <b>Types:</b>
          {types &&
            types.map((ele) => {
              return (
                <section key={ele.slot}>
                  {<b>-{">"}</b>} { ele.type.name.toUpperCase()}
                </section>
              );
            })}
          <p className="card-text">Details of the Pokemon !!</p>
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Details
          </button>
          <PokemonDetails />
        </div>
      </div>
    </div>
  );
}

export default PokemonDisplay;
