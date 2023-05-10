import React, { useEffect } from "react";
import api from "../api";
import { useState } from "react";

import ItemMusica from "../components/ItemMusica";

function Musicas() {
  const [listaMusicas, setListaMusicas] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setListaMusicas(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>

      <div class="container">
        <div class="music-boxes">
          {listaMusicas.map((musica) => (
            <ItemMusica
              nome={musica.nome}
              artista={musica.artista}
              genero={musica.genero}
              ano={musica.ano}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
