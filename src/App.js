import "./App.css";
import Axios from "axios";

function App() {
  const APP_ID = "c6bfcd30";

  const APP_KEY = "4b38b2feb466a4daeac2a26011f80e42	";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Food..." autoComplete="off" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}

export default App;
