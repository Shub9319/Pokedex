import React, { useState } from 'react'
import './header.css';
import poke from '../../assets/poke.png';
import axios from "axios";



function Header({ types, sendPokemon }) {
  
  const [filtername, setfiltername] = useState();

  async function filterpokemon(url) {
    try {
      const response = await axios.get(url);
      sendPokemon(response.data.pokemon);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header>
      <section className="section home-5-bg" id="home">
        <div className="bg-overlay"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="justify-content-center row">
                <div className="col-lg-9">
                  <div className="mt-40 text-center home-5-content ">
                    <img
                      className="pokemon-logo"
                      src={poke}
                      alt="pokemon_logo"
                    />
                    <h1 className="text-white font-weight-normal home-5-title mb-0">
                      PoKedox App
                    </h1>
                    <p className="text-white-70 mt-4 f-15 mb-0">
                      Welcome! to the world of Pokemons. All the Pokémon data
                      you'll ever need in one place, Where you find all types of
                      pokemons in details.
                    </p>
                    <div className="filtergroup ">
                      <div className="btn-group open">
                        <button
                          type="button"
                          className="btn btn-warning dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Type
                        </button>
                        <ul className="dropdown-menu " role="menu">
                          {types &&
                            types.map((type) => {
                              return (
                                <button
                                  key={type.name}
                                  className="dropdown-item"
                                  onClick={() => {
                                    filterpokemon(type.url);
                                    setfiltername(type.name);
                                  }}
                                >
                                  {type.name.toUpperCase()}
                                </button>
                              );
                            })}
                        </ul>
                      </div>
                      <div>
                        <span className={`${filtername ? "filtername" : ""}`}>
                          {filtername ? filtername : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header
