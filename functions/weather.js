const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.searchWeather}&limit=5&appid=${process.env.WEATHER_KEY}`);
    const data = await response.json();
    const json = JSON.stringify(data);
    
    return { 
      statusCode: 200, 
      headers,
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
