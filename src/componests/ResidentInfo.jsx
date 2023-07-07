// ResidentInfo.jsx
const ResidentInfo = ({ resident }) => {
  return (
    <li className="resident-info" key={resident.id}>
      <h3 className="resident-name">Name: {resident.name}</h3>
      <img
        className="resident-image"
        src={resident.image}
        alt={resident.name}
      />
      <p className="resident-status">Status: {resident.status}</p>
      <p className="resident-origin">Origin: {resident.origin?.name}</p>
      <p className="resident-episodes">Episodes: {resident.episode.length}</p>
    </li>
  );
};

export default ResidentInfo;

// Crear un componente llamado “ResidentInfo” que
// va a recibir la url del residente por props, la va a
// consumir y va a mostrar la siguiente información:
// ○ Nombre (“name”).
// ○ Imagen (“image”).
// ○ Status: Vivo, muerto o desconocido
// (“status”).
// ○ Lugar de origen (“origin.name”).
// ○ Cantidad de episodios donde aparece (episode.length).
