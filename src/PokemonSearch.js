import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');

  async function onLoad() {
    const data = await fetchPokemon(searchPokemon);

    setPokemon(data.results);
  }

  useEffect(() => {

    onLoad();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

    await onLoad();
    setSearchPokemon('');
  }
  
  return (
    <div>PokemonSearch
      <form onSubmit={handlePokemonSubmit}>
        <input value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}/>
        <button>Search Pokemon</button>
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
