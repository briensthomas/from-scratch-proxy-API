import './App.css';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { fetchPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const data = await fetchPokemon();

      setPokemon(data.results);
    }
    onLoad();
  }, []);



  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
