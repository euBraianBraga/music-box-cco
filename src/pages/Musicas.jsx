import React from "react";
import api from "../api";
import { useState } from "react";

function Musicas() {
  const [listaMusicas, setListaMusicas] = useState([]);

  function testar() {
    api
      .get()
      .then((resposta) => {
        console.log(resposta.data);
        setListaMusicas(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <>
      <button onClick={testar}>Testar Requisicao</button>

        {
            listaMusicas.map((musica) => (
                <div>
                    <h1>{musica.nome}</h1>
                </div>
            )) 
        }

    </>
  );
}

export default Musicas;
