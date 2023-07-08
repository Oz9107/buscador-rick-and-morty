const LocationInfo = ({ location }) => {
  return (
    <article className="location_text">
      <h2>Location: {location.name}</h2>
      <ul className="location_text-list">
        <li>
          <span>Type: </span>
          <span>{location.type}</span>
        </li>
        <li>
          <span>Dimension: </span>
          <span>{location.dimension}</span>
        </li>
        <li>
          <span>Population: </span>
          <span>{location.residents.length || 0}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
