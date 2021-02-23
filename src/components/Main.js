import React from "react"

// React Bootstrap
import { Container } from "react-bootstrap"

const Main = ({ children }) => {
  return (
    <Container className="pt-4">
      {children}
    </Container>
   );
}

export default Main;