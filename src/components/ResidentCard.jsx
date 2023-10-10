//ResidentCard
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="resident">
      <header className="resident_header">
        <img className="resident_image" src={character?.image} alt="Image" />
        <div className="resident_status">
          <div className={`resident_status-circle ${character?.status}`}></div>
          <span className="resident_status-value">{character?.status}</span>
        </div>
        <section className="resident_body">
          <h3 className="resident_name">{character?.name}</h3>
          <hr className="resident_line" />
          <ul className="resident_list">
            <li className="resident_item">
              <span className="resident_label">Specie</span>
              <span className="resident_item-value">{character?.species}</span>
            </li>

            <li className="resident_item">
              <span className="resident_label">Origin</span>
              <span className="resident_item-value">
                {character?.origin.name}
              </span>
            </li>

            <li className="resident_item">
              <span className="resident_label">Episodes where appear</span>
              <span className="resident_item-value">
                {character?.episode.length}
              </span>
            </li>
          </ul>
        </section>
      </header>
    </article>
  );
};
export default ResidentCard;
