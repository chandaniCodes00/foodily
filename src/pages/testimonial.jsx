import React from "react";
import Images from "../images/images";
import "../css/testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="heading">
        <p>Testimonial</p>
        <h1>What people Say</h1>
        <i className="fa-solid fa-seedling"></i>
      </div>

      <div className="content">
        <img src={Images.author} alt="author" className="customerimg" />
        <p className="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus minus aspernatur omnis, dicta odio fuga quo nostrum,
          maiores illum, sit blanditiis doloribus iste sed culpa perspiciatis
          harum dignissimos sapiente ex.
        </p>
        <h3>
          <span>Meredith Grant</span>- Host Mother
        </h3>
      </div>
    </div>
  );
}

export default Testimonial;
