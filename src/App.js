import './App.css';
import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';

function App() {


  return (
    <div className="App">
      
      <PokemonSearch />
      <YelpSearch />
      <div className='credit'>
        <p><a href="https://icons8.com/icon/S2JJNToo9qHf/yelp">Yelp</a> icon by <a href="https://icons8.com">Icons8</a></p>
        <p><a href="https://icons8.com/icon/JrnL8A6bWzGf/abra">Abra</a> icon by <a href="https://icons8.com">Icons8</a></p>
        <p><a href="https://icons8.com/icon/119449/cloud">Cloud</a> icon by <a href="https://icons8.com">Icons8</a></p>
      </div>
    </div>
  );
}

export default App;
