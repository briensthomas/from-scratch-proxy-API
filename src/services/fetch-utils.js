export async function fetchPokemon(filter) {
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/pokemon?pokemonQuery=${filter}`);
  const data = await rawData.json();

  return data;
}