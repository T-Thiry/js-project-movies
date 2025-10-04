import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #333;
  color: white;
  `

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color:rgb(241, 36, 40);
  `

export const Nav = () => {
  return (
    <Navbar>
      <Logo>M</Logo> 
    </Navbar>
  )
}