import React from "react";
import Images from "../images/images";
import "../css/blog.css";

function Blog() {
  const blogdata = [
    {
      id: 1,
      image: Images.beverage5,
      alt: "Fruit Smoothie",
      category: "SMOOTHIE",
      title: "'Brand bean and goats', cheese bruschetta",
      date: "May 21, 2021",
      comments: "2 Comments",
    },
    {
      id: 2,
      image: Images.beverage7,
      alt: "Fresh Juice",
      category: "SMOOTHIE",
      title: "'Brand bean and goats', cheese bruschetta",
      date: "May 21, 2021",
      comments: "2 Comments",
    },
    {
      id: 3,
      image: Images.contentimage3,
      alt: "Banana Smoothie",
      category: "SMOOTHIE",
      title: "'Brand bean and goats', cheese bruschetta",
      date: "May 21, 2021",
      comments: "2 Comments",
    },
  ];

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
        {blogdata.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.alt} />
            <div className="blog-info">
              <span>{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>
                {blog.date}
                <b>.</b>
                {blog.comments}
                <b>.</b>Share
              </p>
            </div>
          </div>
        ))}
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
