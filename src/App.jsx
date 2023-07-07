import { useState, useEffect } from "react";
import axios from "axios";
import LocationComponent from "./componests/LocationComponent";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getRandomLocation();
  }, []);

  const getRandomLocation = () => {
    const randomId = Math.floor(Math.random() * 108 + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = () => {
    if (searchInput !== "") {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${searchInput}`)
        .then((response) => {
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setSearchResults([]);
    }
  };

  const handleLocationSelection = (selectedLocation) => {
    setLocation(selectedLocation);
    setSearchInput("");
    setSearchResults([]);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    handleSearch();
  };

  return (
    <section className="app-container">
      <header className="header">
        <img src="/logo1.svg" alt="Logo" className="logo" />
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter location name"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="search-button"
            onClick={handleSearch}
          >
            Search
          </button>
          <h1>{location?.name}</h1>
          <ul className="location-suggestions">
            {searchResults.map((result) => (
              <li
                key={result.id}
                onClick={() => handleLocationSelection(result)}
                className="location-suggestion"
              >
                {result.name}
              </li>
            ))}
          </ul>
          <h2 className="related-locations">Related Locations:</h2>
        </div>
      </header>
      {location ? <LocationComponent location={location} /> : <p>Loading...</p>}
    </section>
  );
};

export default App;
