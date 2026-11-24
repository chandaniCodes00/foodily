import React from "react";
import Images from "../images/images";
import "../css/juices.css";

function Juice() {
  return (
    <div className="herosection">
      <img src={Images.juice2} alt="juice" />

      <div className="containerbox">
        <p className="title">Drink for health</p>
        <h3>
          Fresh Fruit <span> Juices</span>
        </h3>

        <i className="fa-solid fa-seedling"></i>
        <p className="description1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          doloribus sequi eaque voluptatem rerum eos eligendi tempore provident,
          dolorem, architecto ex est. Fugiat placeat explicabo itaque excepturi
          quasi eos consectetur.
        </p>
        <button className="buynow1">
          <p className="button-icon1">
            <i className="fa-solid fa-leaf"></i>
          </p>
          <p className="buttontext1">Buy Now</p>
        </button>
      </div>

      <button
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  );
}

export default Juice;
