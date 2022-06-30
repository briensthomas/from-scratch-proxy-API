import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';
import PokemonSpinner from './PokemonSpinner';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading, setLoading] = useState(false);

  async function onLoad() {
    setLoading(true);
    const data = await fetchPokemon(searchPokemon);
    setLoading(false);

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
    <div className='pokemon-list'>PokemonSearch
      <form onSubmit={handlePokemonSubmit}>
        <input value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}/>
        <button>Search Pokemon</button>
      </form>
      {
        loading
          ? <PokemonSpinner />
          : <PokemonList pokemon={pokemon}/>
      }
    </div>
  );
}
