import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { Recipe } from "./components/Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "c6bfcd30";

  const APP_KEY = "4b38b2feb466a4daeac2a26011f80e42	";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Food..."
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
