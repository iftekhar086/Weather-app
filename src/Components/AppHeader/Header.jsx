import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <header>
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Weather-App</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

        </div>
    </header>
  )
}

export default Header
