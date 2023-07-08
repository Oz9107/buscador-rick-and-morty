import { useState } from "react";

const FormLocation = ({ setIdLocation, inputError, setInputError }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(inputValue.trim(), 10);
    if (value >= 1 && value <= 126) {
      setIdLocation(value);
      setInputError(false);
    } else {
      setInputError(true);
    }
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputError(false);
  };

  return (
    <form className="input_button" onSubmit={handleSubmit}>
      <input
        id="inputId"
        style={{ boxShadow: "1px 1px 10px" }}
        type="number"
        value={inputValue}
        onChange={handleChange}
      />
      <button style={{ backgroundColor: "green", color: "white" }}>
        Search
      </button>
      {inputError && (
        <p style={{ color: "red" }}>
          ❌ Hey! You must provide a valid id from 1 to 126 😥
        </p>
      )}
    </form>
  );
};

export default FormLocation;
