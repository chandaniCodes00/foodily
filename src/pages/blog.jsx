import React from "react";
import Images from "../images/images";
import "../css/blog.css";

function Blog() {
  return (
    <div className="blog">
      {/* Heading */}
      <div className="blog-heading">
        <p>News & Recipe</p>
        <h1>Our Fruitsome Blog</h1>
        <i className="fa-solid fa-seedling"></i>

        <p className="blog-description">
          Cras mattis consectetur purus sit amet fermentum. Praesent commodo
          cursus magna,
          <br />
          vel scelerisque nisl consectetur et.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="blog-container">
        <div className="blog-card">
          <img src={Images.beverage5} alt="Fruit smoothie" />
          <div className="blog-info">
            <span>SMOOTHIE</span>
            <h3>Broad bean and goats’ cheese bruschetta</h3>
            <p>
              May 21, 2021 <b>•</b> 2 Comments <b>•</b> Share
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img src={Images.beverage7} alt="Fresh juice" />
          <div className="blog-info">
            <span>SMOOTHIE</span>
            <h3>Broad bean and goats’ cheese bruschetta</h3>
            <p>
              May 21, 2021 <b>•</b> 2 Comments <b>•</b> Share
            </p>
          </div>
        </div>

        <div className="blog-card">
          <img src={Images.contentimage3} alt="Banana smoothie" />
          <div className="blog-info">
            <span>SMOOTHIE</span>
            <h3>Broad bean and goats’ cheese bruschetta</h3>
            <p>
              May 21, 2021 <b>•</b> 2 Comments <b>•</b> Share
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gallery */}
      <div className="blog-gallery">
        <img src={Images.beverage1} alt="Orange" />
        <img src={Images.beverage2} alt="Dessert" />
        <img src={Images.beverage4} alt="Berry smoothie" />
        <img src={Images.beverage5} alt="Orange juice" />
        <img src={Images.beverage7} alt="Watermelon juice" />
      </div>
    </div>
  );
}

export default Blog;
