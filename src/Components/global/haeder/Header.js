import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import style from "./header.module.css";


export const Header = () =>{
    const location = useLocation();
   
  return (
    <Navbar expand="lg" className="">
      <Container fluid className='custom-container'>
        <Navbar.Brand href="#">
            <img src="./images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className='color-dark'>Home</Nav.Link>
            <Nav.Link href="#" className='color-dark'>About</Nav.Link>
            <Nav.Link href="#" className='color-dark'>Blog</Nav.Link>
            <Nav.Link href="#" className='color-dark'>Faq's</Nav.Link>
           
          </Nav>
          <div className="d-flex">
           
            <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
            <Button variant="light" className={`${style.nav_btn}`}>Free Trails</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
