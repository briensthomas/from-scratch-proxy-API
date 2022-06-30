import React from 'react';

export default function WeatherList({ 
  weatherData: { 
    temp, temp_min, temp_max }, 
}) {

  return (
    <div>
      <p>Current Temperature: {temp}° F </p>
      <p>Low of the Day: {temp_min}° F</p>
      <p>High of the Day: {temp_max}° F</p>
      
    </div>
  );
}
