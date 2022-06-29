import React from 'react';
import { useEffect, useState } from 'react';
import { fetchWeather } from './services/fetch-utils';
import WeatherList from './WeatherList';
import WeatherSpinner from './WeatherSpinner';

export default function WeatherSearch() {
  const [weather, setWeather] = useState([]);
  const [searchWeather, setSearchWeather] = useState('Portland, OR 97222');
  const [loading, setLoading] = useState(false);

  async function onLoad() {
    setLoading(true);
    const data = await fetchWeather(searchWeather);
    setLoading(false);

    setWeather(data);
  }

  useEffect(() => {
    onLoad();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onLoad();
    setSearchWeather('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={searchWeather}
          onChange={(e) => setSearchWeather(e.target.value)}/>
        <button>Search Weather</button>
      </form>
      {
        loading
          ? <WeatherSpinner />
          : <WeatherList weather={weather}/>
      }
    </div>
  );
}
