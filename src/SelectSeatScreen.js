import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export default function SelectSeatScreen() {
  const { daysId } = useParams()
  const [movieSeat, setMovieSeat] = useState(null);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  function selectSeat(selectedSeat) {
    setMovieSeat({
      ...movieSeat,
      seats: movieSeat.seats.map(seat => {
        if (selectedSeat.id === seat.id) {
          return {
            ...seat,
            isSelected: !seat.isSelected
          }
        }
        return seat
      })
    });
  }
  function submitData() {
    const filteredSeats = movieSeat.seats.filter(seat => {
      return seat.isSelected
    })
    const ids = filteredSeats.map(seat => {
      return seat.id
    })
    const data = {
      ids,
      name,
      cpf
    }
  }
  useEffect(() => {
    const promise = axios.get(`
https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${daysId}/seats
`)
    promise.then((response) => {
      const { data } = response;
      setMovieSeat({
        ...data,
        seats: data.seats.map(seat => {
          return {
            ...seat,
            isSelected: false
          }
        })
      });
    })
    promise.catch(err => console.log(err.response));
  }, [daysId]);

  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o(s) assento(s)</h1>
      </div>
      <div className='seats'>
        {movieSeat == null ? <div className='loading' /> : movieSeat.seats.map((seat) => {
          if (seat.isAvailable) {
            if (seat.isSelected) {
              return <div className='seat-icon selecionado' key={seat.id} onClick={() => selectSeat(seat)}><h1>{seat.name}</h1></div>
            }
            return <div className='seat-icon disponivel' key={seat.id} onClick={() => selectSeat(seat)}><h1>{seat.name}</h1></div>
          }
          return <div className='seat-icon indisponivel' key={seat.id}><h1>{seat.name}</h1></div>
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
        <button onClick={() => submitData()}>
          <h1>Reservar assento(s)</h1>
        </button>
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
