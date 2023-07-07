//InputControlled
import { useState } from "react";

const InputControlled = () => {
  const [value, setValue] = useState("");
  // const updateInput = (e) => setValue(e.target.value)

  return (
    <>
      <form>
        <label htmlFor="user-name">Nombre de usuario</label>
        <input
          type="text" // aca depende de su tipo si es contraseña o texto
          id="user-name" // esto es para vincular el label y el input
          onChange={(e) => setValue(e.target.value)} //para generar el evento
          value={value} //para que cargue el value
          placeholder="Esto es un placeholder"
        />
        <p>Contenido del input: {value}</p>
        {/* DE ESTA MANERA PODEMOS VER EN EL NAVEGADOR LO INGRESADO AL INPUT */}
      </form>
    </>
  );
};

export default InputControlled;
