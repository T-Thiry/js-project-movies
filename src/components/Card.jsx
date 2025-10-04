import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s ease;
  }
`

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin: 0;

  &:hover ${Overlay} {
    opacity: 1;
  }
`
const Poster = styled.img`
  width: 100%;
  height: auto;
  dsplay: block;
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  padding: 0.5rem 0;
`

const ReleaseDate = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0.25rem 0;
  color: #f9f9f9;
`

export const Card = ({ id, title, poster, releaseDate }) => {  
  return (
    <CardContainer>
      <Link to={`/movie/${id}`}>
        <Poster 
          src={poster} 
          alt={title} 
        />
        <Overlay>
          <Title>{title}</Title>
          <ReleaseDate>Released {releaseDate}</ReleaseDate>
        </Overlay>
      </Link>
    </CardContainer>
  )
}