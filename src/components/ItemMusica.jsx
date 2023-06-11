import api from "../api";
import React from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";
import iconeEditar from "../html-css-template/imagens/edit-icon.png";
import iconeDeletar from "../html-css-template/imagens/delete-icon.png";
import { useState } from "react";

function ItemMusica(props) {
  const estiloCard = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`
  };

  const [editando, setEditando] = useState(false);

  const [inputNome, setInputNome] = useState(props.nome);
  const [inputArtista, setInputArtista] = useState(props.artista);
  const [inputGenero, setInputGenero] = useState(props.genero);
  const [inputAno, setInputAno] = useState(props.ano);

  function atualizarMusica() {
    const corpoRequisicao = {
      nome: inputNome,
      artista: inputArtista,
      genero: inputGenero,
      ano: inputAno
    };

    api
      .put(`/${props.id}`, corpoRequisicao)
      .then(() => {
        alert("deu certo, foi editado");
      })
      .catch(() => {
        alert("deu erro");
      });

    setEditando(false);
  }

  return (
    <>
      <div style={estiloCard} className="card-music">
        <div className="icons">
          <img onClick={() => setEditando(true)} src={iconeEditar} alt="" />
          <img src={iconeDeletar} alt="" />
        </div>

        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              type="text"
              defaultValue={inputNome}
              disabled={editando === false}
              className={
                editando ? "input-music-enable" : "input-music-disabled"
              }
              onChange={(eventoRecebido) =>
                setInputNome(eventoRecebido.target.value)
              }
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className={
                editando ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={inputArtista}
              disabled={editando === false}
              onChange={(eventoRecebido) =>
                setInputArtista(eventoRecebido.target.value)
              }
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className={
                editando ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={inputGenero}
              disabled={editando === false}
              onChange={(eventoRecebido) =>
                setInputGenero(eventoRecebido.target.value)
              }
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input
              className={
                editando ? "input-music-enable" : "input-music-disabled"
              }
              type="text"
              defaultValue={inputAno}
              disabled={editando === false}
              onChange={(eventoRecebido) =>
                setInputAno(eventoRecebido.target.value)
              }
            />
          </p>
          <button
            onClick={() => atualizarMusica()}
            className={editando ? "btn-salvar-enable" : "btn-salvar-disabled"}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
