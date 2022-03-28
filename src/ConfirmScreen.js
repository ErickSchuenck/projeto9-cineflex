import React from 'react'
import { Link } from 'react-router-dom';

export default function ConfirmScreen({ userData, movieName }) {
  const movieInfo = movieName;
  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='confirmed'>
        <h1>Pedido feito <br /> com sucesso!</h1>
      </div>
      <div className='infos'>
        <h2>Filme e sessão</h2>
        <h1>{movieInfo}</h1>
        <h2>Ingressos</h2>
        {userData.seats.map((ids) => {
          return (
            <h1>Assento {ids}</h1>
          )
        })}
        <h2>Comprador</h2>
        <h1>Nome: {userData.name}</h1>
        <h1>Cpf: {userData.cpf}</h1>
        <Link to={`/`}>
          <button><h1>Voltar para Home</h1></button>
        </Link>
      </div>
    </>
  )
}
