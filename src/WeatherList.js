import React from 'react';

export default function WeatherList({ weatherData }) {
  return (
    <div>
      {
        weatherData.map((weather, i) => <p key={weather.name + i + weather.lat}>
          {weather.name}: {weather.lat}, {weather.lon}
        </p>)
      }
    </div>
  );
}
