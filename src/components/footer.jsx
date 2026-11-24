import React from "react";
import Images from "../images/images";
import "../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="divcontainer">
        <div className="contactus">
          <h3 className="contacttext">Contact us</h3>
          <p className="loaction">
            6Fifth Avenue 5501, Broadway, New York Morris Street London 12234
          </p>
          <p className="mail">
            <i class="fa-regular fa-envelope"></i>Your mail@ gmail.com
          </p>
          <p className="number">
            <i class="fa-solid fa-phone"></i>(123)4567 89000
          </p>
        </div>

        <div className="usefullinks">
            <h3>Useful Links</h3>
          <a href="#Home">Home</a>
          <a href="#Aboutus">About Us</a>
          <a href="#blogs">Blogs</a>
          <a href="#termofservices">Term of Services</a>
          <a href="#privacy[policy">Privacy Policy</a>
        </div>

        <div className="followusnow">
            <h3>Follow Us Now</h3>
          <p>
            <i class="fa-brands fa-facebook-f"></i>facebook
          </p>
          <p>
            <i class="fa-brands fa-twitter"></i>twitter
          </p>
          <p>
            <i class="fa-brands fa-instagram"></i>instagram
          </p>
          <p>
            <i class="fa-brands fa-dribbble"></i>dribble
          </p>
        </div>

        <div>
            <h3>Subscribe Now</h3>
          <input type="text" placeholder="Your Email" />
          <button className="subscribenow">Subscribe Now</button>
        </div>
      </div>

      <p>@ 2024 foodily All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
