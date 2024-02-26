import './Header.css';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => (
    <div className="custom_header">
      <Navbar className="container" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/QS logo 6 1.png"
            width=""
            height="50"
            className="d-inline-block align-top"
            alt="Q Solutions logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="justify-content-center w-100 custom_nav text-uppercase">
            <Nav.Link href="#">о нас</Nav.Link>
            <Nav.Link href="#">для кого</Nav.Link>
            <Nav.Link href="#">сборки</Nav.Link>
            <Nav.Link href="#">проекты</Nav.Link>
            <Nav.Link href="#">калькулятор</Nav.Link>
            <Nav.Link href="#">контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
  
  export default Header;