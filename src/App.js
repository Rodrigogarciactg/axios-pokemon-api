import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokeData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="fetch">Fetch Pokemon</h1>
      <ul className="list" >
        {pokeData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
