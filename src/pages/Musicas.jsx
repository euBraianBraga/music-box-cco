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
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>

      <div className="container">
        <div className="music-boxes">
          {listaMusicas.map((musica) => (
            <ItemMusica
              key={musica.id}
              id={musica.id}
              nome={musica.nome}
              artista={musica.artista}
              genero={musica.genero}
              ano={musica.ano}
              capa={musica.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
