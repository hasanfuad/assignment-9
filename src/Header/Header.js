import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/Urban Riders.png'

import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar mx-5 >
        <Container>
          <Navbar.Brand href="#home"><img style={{width: '500px'}} src={logo} alt={logo}/></Navbar.Brand>
          <Nav className="">
            <Link className="style-link" to="/home">
              Home
            </Link>
            <Link className="style-link" to="/destination">
              Destination
            </Link>
            <Link className="style-link" to="/blog">
              Blog
            </Link>
            <Link className="style-link" to="/contact">
              Contact
            </Link>
            <Link className="style-link bg-warning p-3 rounded" to="/login">Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
