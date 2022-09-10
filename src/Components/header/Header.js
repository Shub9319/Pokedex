import React from 'react'
import './header.css';
import poke from '../../assets/poke.png';
function Header() {
  return (
    <header>
      <section class="section home-5-bg" id="home">
        <div class="bg-overlay"></div>
        <div class="home-center">
          <div class="home-desc-center">
            <div class="container">
              <div class="justify-content-center row">
                <div class="col-lg-9">
                  <div class="mt-40 text-center home-5-content ">
                    <img className='pokemon-logo' src={poke} alt='pokemon_logo' />
                    <h1 class="text-white font-weight-normal home-5-title mb-0">
                      PoKedox App
                    </h1>
                    <p class="text-white-70 mt-4 f-15 mb-0">
                      Welcome! to the world of Pokemons. All the Pokémon data
                      you'll ever need in one place, Where you find all
                      types of pokemons in details.
                    </p>
                    <div class="mt-3">
                      <input
                        class="btn btn-success"
                        type="button"
                        value="Get started"
                      />
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
