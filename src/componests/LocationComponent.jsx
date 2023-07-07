import { useState, useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";

const LocationComponent = ({ location }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentsData = await Promise.all(
        location.residents.map((residentUrl) => axios.get(residentUrl))
      );
      setResidents(residentsData.map((resident) => resident.data));
    };

    fetchResidents();
  }, [location]);

  return (
    <main className="location-component">
      <div className="mainText">
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {residents.length}</p>
      </div>
      <div className="resident-grid">
        {residents.map((resident) => (
          <ResidentInfo key={resident.id} resident={resident} />
        ))}
      </div>
    </main>
  );
};

export default LocationComponent;
