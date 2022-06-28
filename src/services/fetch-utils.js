export async function fetchPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon`);
  const data = await rawData.json();

  return data;
}