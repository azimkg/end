import React from "react";
import "../Footer/Footer.css";
import "boxicons";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer container ">
      <div className="footer-block">
        <img src={logo} alt="logo" />
      </div>

      <div className="footer-blocks">
        <div className="footer-block1 block-block">
          <p>Custom Design</p>
          <p>All Products</p>
          <p>Inspiration</p>
          <p>Sustainability</p>
          <p>Affiliate Program</p>
          <p>Request Custom Quote</p>
          <p>Request Dieline</p>
        </div>
        <div className="footer-block2 block-block">
          <p>About Us</p>
          <p>Blog</p>
          <p>Partners</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-block3 block-block">
          <p>Shopify App</p>
          <p>14 Day Free Shopify Trial</p>
          <p>BigCommerce</p>
          <div>
            <a href="">
              <box-icon
                className="icon"
                color="steelblue"
                type="logo"
                name="instagram-alt"
              ></box-icon>
            </a>
            <a href="">
              <box-icon
                className="icon"
                color="steelblue"
                name="facebook-circle"
                type="logo"
              ></box-icon>
            </a>
            <a href="">
              {" "}
              <box-icon
                className="icon"
                color="steelblue"
                name="twitter"
                type="logo"
              ></box-icon>
            </a>
          </div>
        </div>
        <div className="footer-block4 block-block">
          <p>Get exclusive offers and tips.</p>
          <input type="text" placeholder="name?" name="" id="" />
          <button>Join instantly</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
