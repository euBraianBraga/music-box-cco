import React from "react";
import Candidato from "../components/Candidato";

function Votacao() {
  return (
    <>
      <h1>VOTE NO SEU FASTFOOD FAVORITO</h1>
      <Candidato nome="BK" />
      <Candidato nome="Méqui" />
      <Candidato nome="Papais" />
    </>
  );
}

export default Votacao;
