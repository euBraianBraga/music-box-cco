import React, { useState } from "react";

function Candidato(props) {
  const [votos, setVotos] = useState(0);

  function votar() {
    setVotos(votos + 1);
  }

  return (
    <>
      <h1>{props.nome}</h1>
      <h1>Votos: {votos}</h1>
      <button onClick={votar}>Votar</button>
    </>
  );
}

export default Candidato;
