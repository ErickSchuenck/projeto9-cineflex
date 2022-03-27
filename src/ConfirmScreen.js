import React from 'react'

export default function ConfirmScreen() {
  const movieInfo = 'Enola Holmes 24/06/2021 15:00';
  const testObject = {
    ids: [1, 2, 3],
    name: "Fulano",
    cpf: "12345678900"
  }

  function reloadPage() {
    console.log('reloadin')
    Location.reload()
  }

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
        {testObject.ids.map((ids) => {
          return (
            <h1>Assento {ids}</h1>
          )
        })}
        <h2>Comprador</h2>
        <h1>Nome: {testObject.name}</h1>
        <h1>Cpf: {testObject.cpf}</h1>
        <button onClick={() => { reloadPage() }}><h1>Voltar para Home</h1></button>
      </div>
    </>
  )
}
