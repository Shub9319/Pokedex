import React, { useState } from "react";
import PokemonDetails from "../pokemonDetails/PokemonDetails";

function PokemonDisplay({ pokemon }) {
    function getID(){
        return pokemon.url.substring(34,pokemon.url.length-1);
    }
    const [toggle, settoggle] = useState(false)

    const id= getID();


  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <p>
            <b>Pokemon Id: {id}</b>
          </p>
          <p className="card-text">Details of the Pokemon !!</p>

          <button
            type="button"
            className="btn btn-primary"
            // data-toggle="modal"
            // data-target="#exampleModal"
            onClick={()=>{settoggle(!toggle)
            console.log(toggle)}}
          >
            Details 
          </button>
          {toggle && <PokemonDetails  pokemon={pokemon}   />}
          
        </div>
      </div>
    </div>
  );
}

export default PokemonDisplay;
