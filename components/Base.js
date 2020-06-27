import styled from 'styled-components'

const Container = styled.div`
  height: 500px;
  width: 500px;
  background-color: red;
  &:hover {
    background-color: green;
    border: 1px solid black
  }
`

const Base = () => {
  return (
    <Container>
      <p>Hello World</p>
    </Container>
  )
}

export default Base
