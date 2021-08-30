import React from "react";
import { Link } from "react-router-dom";

import './HomePageComp.css';

const HomePageComp = (props) => {
  const { title, image } = props.homeData;
  return (
    <div className="row rounded" style={{backgroundColor: "white", margin: "20px"}}>
      <div className="description-image">
        <Link to="/destination">
          <img src={image} alt="" />
          <div>
            <h4 className="mt-3">{title}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePageComp;
