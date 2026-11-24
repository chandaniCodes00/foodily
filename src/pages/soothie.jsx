import React from "react";
import Images from "../images/images";
import "../css/soothie.css";

function Soothie() {
  return (
    <div className="recipe">
      <header>
        <p>Best For You</p>
        <h1>Detox Smoothie Recipe</h1>
        <i className="fa-solid fa-seedling"></i>
      </header>

      <div className="main">
        <img src={Images.recipe} alt="recipe image" />

        <div className="item cucumber">
          <img src={Images.recipe1} alt="cucumber" />
          <div>
            <h3>Cucumber</h3>
            <p>Fresh cucumber for a healthy smoothie.</p>
          </div>
        </div>

        <div className="lemon">
          <img src={Images.icon2} alt="" />
          <div>
            <h3>Lemon</h3>
            <p>Fresh lemon for a refreshing taste.</p>
          </div>
        </div>

        <div className="item apple" alt="">
          <img src={Images.recipe2} alt="" />
          <div>
            <h3>Apple</h3>
            <p>Fresh apple for natural sweetness</p>
          </div>
        </div>

        <div className="item water">
          <img src={Images.recipe3} alt="" />
          <div>
            <h3>Fresh Water</h3>
            <p>Pure water for a healthy drink.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soothie;
