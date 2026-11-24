import React from "react";
import Images from "../images/images";
import "../css/beverages.css";

function Beverages() {
  return (
    <div className="beveragesection">
      <div className="beveragecontent">
        <p>Best for You</p>
        <h3>Our Beverage</h3>
        <i className="fa-solid fa-seedling"></i>

        <list>
          <ol>
            <li>
              <img src={Images.beverage1} alt="beverages" />
              <h4>MilkShake</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage2} alt="beverages" />
              <h4>Frappe</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage3} alt="beverages" />
              <h4>Booba Drinks</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage4} alt="beverages" />
              <h4>Mojito</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage5} alt="beverages" />
              <h4>Slushy</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage6} alt="beverages" />
              <h4>Hot Chocolate</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage7} alt="beverages" />
              <h4>smoothie</h4>
              <p>3 products</p>
            </li>
            <li>
              <img src={Images.beverage8} alt="beverages" />
              <h4>Coffee</h4>
              <p>3 products</p>
            </li>
          </ol>
        </list>
      </div>

      <button className="buynow1">
        <p className="button-icon1">
          <i className="fa-solid fa-leaf"></i>
        </p>
        <p className="buttontext1">View All Products</p>
      </button>
    </div>
  );
}

export default Beverages;
