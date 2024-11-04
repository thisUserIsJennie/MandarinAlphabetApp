import logo from './customLogo.jpg';
import './App.css';
import MainPage from './MainPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

/* TODO: don't hardcode page selection values */
const PageSelection = { HomePage: "HomePage" };

const App = () => {
  var userSelectedContent = PageSelection.HomePage;
  const mainContent = MainPage(userSelectedContent);
  const navBar = NavigationBar();

  return (
    <div className="App">
      {navBar};
      {mainContent};
    </div>
  );
}

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Coming Soon" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Quiz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Learn To Write Zhuyin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interactive Keyboard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
