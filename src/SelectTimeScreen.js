import React from 'react'
import axios from 'axios'

export default function SelectTimeScreen() {

  // https://mock-api.driven.com.br/api/v5/cineflex/movies/ID_DO_FILME/showtimes

  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o horário</h1>
      </div>
      <footer>
        <h1>-test- Movie name -test-</h1>
      </footer>
    </>
  )
}
