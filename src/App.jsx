import { useEffect, useState } from "react";
import axios from "axios";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [isLoading, setIsLoading] = useState(true);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
      setIsLoading(true);
      axios
        .get(url)
        .then((res) => {
          setLocation(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [idLocation]);

  const handleSetIdLocation = (value) => {
    setInputError(false);

    if (value >= 1 && value <= 126) {
      setIdLocation(value);
    } else {
      setInputError(true);
    }
  };

  return (
    <section>
      <img src="/logo1.png" alt="Logo" className="logo" />
      <FormLocation
        setIdLocation={handleSetIdLocation}
        inputError={inputError}
        setInputError={setInputError}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location &&
              location.residents &&
              Array.isArray(location.residents) &&
              location.residents.map((url) => (
                <ResidentCard key={url} url={url} />
              ))}
          </div>
          <form className="footer">
            <h3>Made with love in Academlo</h3>
            <p>Web Developer: Oscar Vallejo</p>
          </form>
        </>
      )}
    </section>
  );
}

export default App;
