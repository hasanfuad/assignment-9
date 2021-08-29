import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

import logo from "../../images/Urban Riders.png";
import map from "../../images/Map.png";
import Maps from "./Maps/Maps";

import "./Destination.css";

const Destination = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <Navbar mx-5>
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "200px" }} src={logo} alt={logo} />
          </Navbar.Brand>
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
            <p
              style={{
                color: "darkBlue",
                fontWeight: "600",
                marginTop: "11px",
              }}
            >
              {loggedInUser.name.toUpperCase()}
            </p>
          </Nav>
        </Container>
      </Navbar>

      <form>
        <div className="row" style={{ marginRight: "41rem" }}>
          <div className="col-lg-6 col-md-12 col-sm-6 destination-info ">
            <label>Pick From</label>
            <br />
            <input className="input-btn rounded" type="text" name="from" />
            <br />
            <label>Pick From</label>
            <br />
            <input className="input-btn rounded" type="text" name="to" />
            <br />
            <br />
            <input
              className="input-btn rounded btn-warning form-btn"
              type="submit"
              name="search"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-6 destination-map">
            <Maps />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Destination;
