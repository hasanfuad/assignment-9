import React from "react";

import "./Home.css";

import bike from "../../images/Frame.png";
import bus from "../../images/Frame-1.png";
import car from "../../images/Frame-2.png";
import train from "../../images/Group.png";
import Header from "../../Header/Header";

const Home = () => {
  return (
    <div className="bg-image">
      <Header />

      <div className="row">
        <div className="col-lg-2 bike mt-4">
          <img src={bike} alt="" />
          <div className="component-item">
            <h4 className="mt-5">BIKE</h4>
          </div>
        </div>

        <div className="col-lg-2 bus mt-4">
          <img src={bus} alt="" />
          <div className="component-item">
            <h4 className="mt-5">BUS</h4>
          </div>
        </div>

        <div className="col-lg-2 car mt-4">
          <img src={car} alt="" />
          <div className="component-item">
            <h4 className="mt-5">CAR</h4>
          </div>
        </div>

        <div className="col-lg-2 train mt-4">
          <img src={train} alt="" />
          <div className="component-item">
            <h4 className="mt-5">TRAIN</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
