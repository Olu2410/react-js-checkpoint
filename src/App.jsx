import { Navbar, Container, Nav, Card, } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <>
    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
          {/* Navbar */}
          <Navbar style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Container>
              <Navbar.Brand href="#">My Website</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ display: 'flex', gap: '40px'}}>
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Heading */}
          <h1 style={{ textAlign: 'center', marginTop: '20px' }}>REACT-JS CHECKPOINT</h1>

          {/* Cards */}
          <Container style={{ marginTop: '20px', display: 'flex', gap: '50px'}}>
            <Card style={{backgroundColor: 'grey'}}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is the content of card 1.
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card style={{ backgroundColor: 'green', }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is the content of card 2.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ backgroundColor: 'yellow', }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is the content of card 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
      </div>

    </>
  );
}

export default App;
