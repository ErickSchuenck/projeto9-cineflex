import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function SelectSeatScreen() {

  const [movieSeat, setMovieSeat] = useState(null);
  const [selected, setSelected] = useState(false);
  const [ids, setIds] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function selectSeat() {
    setSelected(!selected)
  }
  useEffect(() => {
    const promise = axios.get(`
https://mock-api.driven.com.br/api/v5/cineflex/showtimes/112/seats
`)
    promise.then((response) => {
      const { data } = response;
      console.log(data)
      console.log(data.seats)
      setMovieSeat(data);
    })
    promise.catch(err => console.log(err.response));
  }, []);


  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o(s) assento(s)</h1>
      </div>
      <div className='seats'>
        {movieSeat == null ? <div className='loading' /> : movieSeat.seats.map((seats) => {
          if (seats.isAvailable === true) {
            if (selected === false) { return <div className='seat-icon disponivel' onClick={() => selectSeat()}><h1>{seats.name}</h1></div> }
            if (selected === true) { return <div className='seat-icon selecionado' onClick={() => selectSeat()}><h1>{seats.name}</h1></div> }
          }
          if (seats.isAvailable === false) {
            return <div className='seat-icon indisponivel' onClick={() => selectSeat()}><h1>{seats.name}</h1></div>
          }
        })
        }
      </div>
      <div className='description'>
        <div className='description-icon'>
          <div className='seat-icon selecionado'></div>
          <h1>Selecionado</h1>
        </div>
        <div className='description-icon'>
          <div className='seat-icon disponivel'></div>
          <h1>Disponível  </h1>
        </div>
        <div className='description-icon'>
          <div className='seat-icon indisponivel'></div>
          <h1>Indisponível</h1>
        </div>
      </div>
      <div className='infos'>
        <h1>Nome do comprador:</h1>
        <input type="text" onChange={event => setName(event.target.value)} placeholder='Digite seu nome...'></input>
        <h1>CPF do comprador:</h1>
        <input type="text" onChange={event => setCpf(event.target.value)} placeholder='Digite seu cpf...'></input>
        <button><h1>Reservar assento(s)</h1></button>
      </div>
      <footer>
        <div className='small-movie-container'>
          {movieSeat == null ? null : <img alt='pequeno poster do filme escolhido' src={movieSeat.movie.posterURL} />}
        </div>
        <div className='name-and-time-infos'>
          <h1> {movieSeat == null ? null : `${movieSeat.movie.title}`} <br />
            {movieSeat == null ? null : `${movieSeat.day.weekday} - ${movieSeat.name}`}
          </h1>
        </div>
      </footer>
    </>
  )
}
