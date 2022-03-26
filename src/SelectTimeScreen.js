import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SelectTimeScreen() {

  const { movieId } = useParams()
  const [movieTime, setMovieTime] = useState(null);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
    promise.then((response) => {
      console.log('response', response)
      const { data } = response;
      setMovieTime(data);
    })
    promise.catch(err => console.log(err.response));
  }, [movieId]);
  console.log(movieTime)
  return (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o horário</h1>
      </div>

      {movieTime == null ? <div className='loading' /> : movieTime.days.map(day => {
        return (
          <>
            <div className='weekday'>
              <h1>{day.weekday} - {day.date}</h1>
            </div>
            <div className='flex'>
              {day.showtimes.map(showtime => {
                return (
                  <div className='weekday-time'>
                    <h1>{showtime.name}</h1>
                  </div>
                )
              })}
            </div>
          </>
        )
      })}

      <footer>
        <div className='small-movie-container'>
          {movieTime == null ? null : <img alt='pequeno poster do filme escolhido' src={movieTime.posterURL} />}
        </div>
        {movieTime == null ? null : <h1>{movieTime.title}</h1>}
      </footer>
    </>
  )
}
