import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: white;

  @media (min-width: 768px) {
    justify-content: flex-end;
    
  `

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  z-index: 3;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    jusftify-content: center;
    gap: 2rem;
    padding-bottom: 4rem;
`

const Poster = styled.img`
  width: 260px;
  height: auto;
  border: 2px solid white;

  @media (min-width: 600px) {
    width: 300px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding-bottom: 2rem;
  }
`

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: semibold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const Overview = styled.p`
  font-size: 1rem;
  font-weight: regular;
  line-height: 1.5;
`

const Info = styled.div`
  font-size: 1rem;
  font-weight: regular;
  line-height: 1.5;
`

  export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
      const data = await response.json()
      setMovie(data)
    }

    fetchMovieDetails()
  }, [id])

  if (!movie) {
    return <p>Loading...</p>
  }

  return (
    <DetailsContainer>
      <Background $image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
      <ContentWrapper>
        <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <TextContent>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <Info>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average} / 10 ⭐</p>
          </Info>
        </TextContent>
      </ContentWrapper>
    </DetailsContainer>
  )
}