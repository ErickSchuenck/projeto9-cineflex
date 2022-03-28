import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function SelectMovieScreen() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`)
    promise.then((response) => {
      const { data } = response;
      setMovies(data);
    })
    promise.catch(err => console.log(err.response));
  }, []);

  return movies.length > 0 ? (
    <>
      <header>
        <h1>CINEFLEX</h1>
      </header>
      <div className='select'>
        <h1>Selecione o filme</h1>
      </div>
      <div className='posters'>
        {
          movies.map(movie => {
            const { id, posterURL } = movie;
            return <Link to={`/SelectTimeScreen/${id}`}>
              <div className='poster-container'>
                <div className='poster' key={id}>
                  <img alt='filme atual' src={posterURL} />
                </div>
              </div>
            </Link>
          })
        }
      </div>

    </>
  ) : <div className='loading' />
}
