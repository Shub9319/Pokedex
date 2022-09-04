import logo from './logo.svg';
import './App.css';
import Pokemons from './Components/pokemons/Pokemons';
import Footer from './Components/footer/Footer';



function App() {
  return (
    <div className="App">
      <h2 className="heading">Pokedex Application</h2>
      <Pokemons />
      <section >
        <Footer/>
      </section>
    </div>
  );
}

export default App;
