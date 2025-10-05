import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #333;
  color: white;
  `

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  `

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  `

  export const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404 - Page Not Found</Title>
      <Message>Sorry, the page you are looking for does not exist. Go back to Movies</Message>
    </NotFoundContainer>
  )
}