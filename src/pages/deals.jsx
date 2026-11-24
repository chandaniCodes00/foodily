import React from "react";
import Images from "../images/images";
import "../css/deals.css";


function Deals()
{
    return(
        <div>
    <img src={Images.pattern1} alt="backgroundimages" className="bottomimage" />

<section className="hero">
      <div className="circle-content">
        <div className="content">
          <p className="subtitle">30% Off For Juice</p>

          <h1>Big Deals of the Week</h1>

          <p className="description">
            Us percipit urbanitas referrentur ea.
            Mei at numquam molestiae intellegam.
            Ansed dictas accumsan.
          </p>

          <h3>To Get New Of Our Deals</h3>

          <form className="email-form">
            <input
              type="email"
              placeholder="type your email"
              required
            />

            <button type="submit" aria-label="Subscribe">
              ➤
            </button>
          </form>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Deals;