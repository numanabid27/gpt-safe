import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import style from "./header.module.css";
import { Link } from 'react-router-dom';

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
            className={`${style.nav_listing} m-auto my-2 my-lg-0`}
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='color-dark'>Home</Link>
            <Link to="#" className='color-dark'>About</Link>
            <Link to="/blog" className='color-dark'>Blog</Link>
            <Link to="#" className='color-dark'>Faq's</Link>
           
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

