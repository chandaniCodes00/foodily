import React from "react";
import Images from "../images/images"
import "../css/upcomingproducts.css";

function Upcomingproducts()
{
    return(
        
<section className="beverage">

      <div className="beverage-content">

        <h1>
          Upcoming Our
          <br />
          Beverage
        </h1>

        <i className="fa-solid fa-seedling"></i>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button className="product-btn">
          <span>❯</span>
          All Product
        </button>

      </div>

      <div className="beverage-image">
        <img src={Images.image} alt="Fresh beverages" />
      </div>

      <img
        src={Images.recipe1}
        className="fruit-decoration"
        alt=""
      />

    </section>
        
    )
}

export default Upcomingproducts;