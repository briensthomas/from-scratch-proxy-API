import React from 'react';

export default function WeatherList({ weather }) {
  return (
    <div>
      {
        weather.map((rain, i) => <p key={rain.name + i + rain.lat}>
          {rain.name}: {rain.lat}, {rain.lon}
        </p>)
      }
    </div>
  );
}
