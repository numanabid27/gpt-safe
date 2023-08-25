import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import style from "./header.module.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDimensions } from "../../../Components/hooks/use-dimensions";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpenNav(false)
  }, [location.pathname])
  const { width } = useDimensions();
  return (
    <Navbar expand="md" className="">
      <Container fluid className='custom-container'>
        <Navbar.Brand href="#">
          <img src="../images/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setOpenNav(!openNav)} />
        <div className='nav'>
          {
            width && width < 767 ?
              <div className={`${openNav ? "hide" : "show"}`}>
                <Nav
                  className={`${style.nav_listing} m-auto my-2 my-lg-0`}
                >
                  <Link to="/" className={`${location.pathname === "/" ? "color-green" : "color-dark"}`}>Home</Link>
                  <Link to="#" className='color-dark'>About</Link>
                  <Link to="/blog" className={`${location.pathname === "/blog" ? "color-green" : "color-dark"}`}>Blog</Link>
                  <Link to="#" className='color-dark'>Faq's</Link>

                </Nav>
                <div className="d-flex">

                  <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
                  <Button variant="light" className={`${style.nav_btn}`}>Free Trails</Button>
                </div>
              </div>
              :
              <div className='desktop-nav'>
                <Nav
                  className={`${style.nav_listing} m-auto my-2 my-lg-0`}
                >
                  <Link to="/" className={`${location.pathname === "/" ? "color-green" : "color-dark"}`}>Home</Link>
                  <Link to="#" className='color-dark'>About</Link>
                  <Link to="/blog" className={`${location.pathname === "/blog" ? "color-green" : "color-dark"}`}>Blog</Link>
                  <Link to="#" className='color-dark'>Faq's</Link>

                </Nav>
                <div className="d-flex">

                  <Button variant="light" className={`${style.nav_btn} me-2`}>Login</Button>
                  <Button variant="light" className={`${style.nav_btn}`}>Free Trails</Button>
                </div>
              </div>
          }

        </div>
      </Container>
    </Navbar>
  );
}

