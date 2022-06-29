import React from 'react';

export default function WeatherList({ 
  weatherData: { 
    temp, temp_min, temp_max }, 
}) {

  return (
    <div>
      <p>Current Temperature(K): convertToFahrenheit({temp}) </p>
      <p>Low of the Day(K): {temp_min}</p>
      <p>High of the Day(K): {temp_max}</p>
      
    </div>
  );
}
