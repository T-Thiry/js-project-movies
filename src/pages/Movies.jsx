import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'


const MoviesGrid = styled.div`
  display: grid;
  gap: 0;
  padding: 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) { 
  grid-template-columns: repeat(2, 1fr); 
  } /* Tablets */
  
  @media (min-width: 900px) { grid-template-columns: repeat(3, 1fr); } /* Medium tablets */
  @media (min-width: 1200px) { grid-template-columns: repeat(4, 1fr); } /* Desktops */
  @media (min-width: 1600px) { grid-template-columns: repeat(6, 1fr); } /* Large desktops */
`

export const Movies = () => {
  const [movies, setMovies] = React.useState([])

  useEffect(() => {
    const fetchMovies = async () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    const data = await response.json()
    setMovies(data.results)
    }

    fetchMovies()
  }
, [])

  return (
    <div>
      <MoviesGrid>
        {movies.map(movie => (
          <Card 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            releaseDate={movie.release_date}
          />
        ))}
      </MoviesGrid>
    </div>
  )
}
