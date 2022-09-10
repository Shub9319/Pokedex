
import './App.css';
import Pokemons from './Components/pokemons/Pokemons';
import Footer from './Components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Pokemons />
      <section >
        <Footer/>
      </section>
    </div>
  );
}

export default App;
