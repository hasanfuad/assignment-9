import React from "react";

import "./Home.css";
import Header from "../../Header/Header";

import fakeData from "../data";
import HomePageComp from "./HomePageComp/HomePageComp";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{overflow: 'hidden'}} className="home-data">
        {fakeData.map((homeData) => (
          <HomePageComp homeData={homeData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
