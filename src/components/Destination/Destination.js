import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

import logo from "../../images/Urban Riders.png";
import peopleIcon from '../../images/peopleicon.png'

import Maps from './Maps/Maps';

import "./Destination.css";

const Destination = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const inputField = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div>
      <Navbar mx-5>
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "500px" }} src={logo} alt={logo} />
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
            <div className="row">
              <div className="col-lg-6">
                <label style={{ fontWeight: "700" }}>Pick From</label>
                <br />
                <input
                  onBlur={inputField}
                  className="input-btn rounded"
                  type="text"
                  name="from"
                  value="Dhaka"
                />
                <br />
                <label style={{ fontWeight: "700" }}>Pick From</label>
                <br />
                <input
                  onClick={inputField}
                  className="input-btn rounded"
                  type="text"
                  name="to"
                  value="Cumilla"
                />
                <br />
                <br />
                <input
                  className="input-btn rounded btn-warning form-btn"
                  type="submit"
                  name="search"
                  value="Search"
                />
              </div>
              <div className="col-lg-6">
                <h4 style={{textAlign: "center", textDecoration: "underline"}}>Fare Detail</h4>
                <p style={{fontSize: "20px", fontWeight: "700"}}><img style={{width: "10%"}} src={peopleIcon} alt={peopleIcon}/>4</p>
                <p><span style={{fontSize: "20px", fontWeight: "700"}}>$ 60</span></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-6 destination-map">
            <Maps/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Destination;
