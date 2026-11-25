import React from "react";
import Images from "../images/images";
import "../css/beverages.css";

function Beverages() {
  const beverageData = [
    {
      id: 1,
      image: Images.beverage1,
      alt: "MilkShake",
      title: "MilkShake",
      product: "3 products",
    },

    {
      id: 2,
      image: Images.beverage2,
      alt: "Frappe",
      title: "Frappe",
      product: "3 products",
    },

    {
      id: 3,
      image: Images.beverage3,
      alt: "Booba Drinks",
      title: "Booba Drinks",
      product: "3 products",
    },

    {
      id: 4,
      image: Images.beverage4,
      alt: "Mojito",
      title: "Mojito",
      product: "3 products",
    },

    {
      id: 5,
      image: Images.beverage5,
      alt: "Slushy",
      title: "Slushy",
      product: "3 products",
    },

    {
      id: 6,
      image: Images.beverage6,
      alt: "Hot Chocolate",
      title: "Hot Chocolate",
      product: "3 products",
    },

    {
      id: 7,
      image: Images.beverage7,
      alt: "Smoothie",
      title: "Smoothie",
      product: "3 products",
    },

    {
      id: 8,
      image: Images.beverage8,
      alt: "Coffee",
      title: "Coffee",
      product: "3 products",
    },
  ];

  return (
    <div className="beveragesection">
      <div className="beveragecontent">
        <p>Best for You</p>
        <h3>Our Beverage</h3>
        <i className="fa-solid fa-seedling"></i>

        <list>
          <ol>
            {beverageData.map((data) => (
              <li key={data.id}>
                <img src={data.image} alt={data.alt} />
                <h4>{data.title}</h4>
                <p>{data.product}</p>
              </li>
            ))}
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
