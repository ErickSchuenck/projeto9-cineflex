import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SelectTimeScreen() {

  const { movieId } = useParams()
  const [movieTime, setMovieTime] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
    promise.then((response) => {
      const { data } = response;
      console.log(data)
      setMovieTime(data);
    })
    promise.catch(err => console.log(err.response));
  }, []);

  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o horário</h1>
      </div>

      <h1>{movieTime.title}</h1>

      <footer>
        <h1>-test- Movie name -test-</h1>
      </footer>
    </>
  )
}
