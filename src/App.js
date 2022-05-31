
import { useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';


function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemon, setPokemon] = useState({});
  const [newPokemon, setNewPokemon] = useState("");

  async function fetchPokemon() {
      const response = await fetch(url+newPokemon);
      if (response.status !== 200) {
        console.log("Status: ", response.status)
        setPokemon()
      }
      else {
        const data = await response.json();
        console.log("data", data);
        setPokemon(data);
      }
    return;
  }
  
  function handleChange(event) {
    event.preventDefault();
    setNewPokemon(event.target.value);
  };

  return (
    // buttons and fetch
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={fetchPokemon}>CLICK ME TO FIND OUT ABOUT THIS POKEMON</button>
       <Pokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;
