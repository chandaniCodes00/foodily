import React from "react";
import Images from "../images/images";
import "../css/soothie.css";

function Soothie() {
  const smoothiedata = [
    {
      id: 1,
      image: Images.recipe1,
      alt: "cucumber",
      className: "cucumber",
      title: "Cucumber",
      description: "Fresh cucumber for a healthy smoothie",
    },
    {
      id: 2,
      image: Images.icon2,
      alt: "lemon",

      className: "lemon",
      title: "Lemon",
      description: "Fresh lemon for refreshing tatse",
    },
    {
      id: 3,
      image: Images.recipe2,
      alt: "apple",
      className: "apple",
      title: "Apple",
      description: "Fresh apple for natural sweetness",
    },
    {
      id: 4,
      image: Images.recipe3,
      alt: "freshwater",
      className: "freahwater",
      title: "Fresh Water",
      description: "Pure water for a healthy drink",
    },
  ];
  return (
    <div className="recipe">
      <header>
        <p>Best For You</p>
        <h1>Detox Smoothie Recipe</h1>
        <i className="fa-solid fa-seedling"></i>
      </header>

      <div className="main">
        <img src={Images.recipe} alt="recipe image" />
        {smoothiedata.map((item) => (
          <div className={`item ${item.className || item.alt}`} key={item.id}>
            <img src={item.image} alt={item.alt} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

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
