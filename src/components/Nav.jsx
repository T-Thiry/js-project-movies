import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #333;
  color: white;
  `

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  `

const BackLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgb(127, 127, 127);
    text-decoration: underline;
  }
  `

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color:rgb(241, 36, 40);
  `

export const Nav = () => {
  const location = useLocation()
  const isMovieDetails = location.pathname.startsWith('/movie/')

  return (
    <Navbar>
      <LeftSection>
        <Logo>M</Logo> 
        {isMovieDetails && <BackLink to="/">&larr; Back to Movies</BackLink>}
      </LeftSection>
    </Navbar>
  )
}