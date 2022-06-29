export async function fetchPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon?searchPokemon=${filter}`);
  const data = await rawData.json();

  return data;
}

export async function fetchBusinesses(filter) {
  const rawData = await fetch(`/.netlify/functions/yelp?searchYelp=${filter}`);
  const data = await rawData.json();

  return data;
}

export async function fetchWeather(filter) {
  const rawData = await fetch(`/.netlify/functions/weather?searchWeather=${filter}`);
  const data = await rawData.json();

  return data;
}