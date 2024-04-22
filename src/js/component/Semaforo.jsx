import React, { useState } from "react";

const Semaforo = () => {
  const [bright, setBright] = useState(null);
  const [showPurple, setShowPurple] = useState(false); // Estado para controlar la visibilidad de la luz púrpura

  function btnChange() { //Alterna entre luces pulsando el botón
    if (bright === null) {
      setBright("red");
    } else if (bright === "red") {
      setBright("yellow");
    } else if (bright === "yellow") {
      setBright("green");
    } else if (bright === "green") {
      setBright("red");
    }
    setShowPurple(false); // Ocultar la luz púrpura después de cambiar el color del semáforo
  }

  function btnTogglePurple() {
    setShowPurple(!showPurple); // Alternar la visibilidad de la luz púrpura
    if (showPurple) {
      setBright(null); // Si se apaga la luz púrpura, se vuelve al estado inicial
    }
  }

  return (
    <div className="text-center container">
        <h1> Traffic Light</h1>
      <div className="semaforo">
        <div
          onClick={() => setBright("red")}
          className={"luz roja" + (bright === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setBright("yellow")}
          className={"luz amarilla" + (bright === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setBright("green")}
          className={"luz verde" + (bright === "green" ? " glow" : "")}
        ></div>
        {showPurple && ( // Mostrar la luz púrpura si showPurple es true
          <div
            className="luz purpura"
          ></div>
        )}
      </div>
      <button onClick={btnChange} type="button" class="btn btn-success mt-3 mx-3">
        Change
      </button>
      <button onClick={btnTogglePurple} type="button" class="btn btn-warning mt-3 mx-3">
        Toggle Purple
      </button>
    </div>
  );
};

export default Semaforo;