import logo from './logo.svg';
import './App.css';
import Pokemons from './Components/pokemons/Pokemons';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';



function App() {
  return (
    <div className="App">
      <section>
      <Header/>
      </section>
      <Pokemons />
      <section >
        <Footer/>
      </section>
    </div>
  );
}

export default App;
