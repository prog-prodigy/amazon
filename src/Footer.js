import React from "react";
import "./Footer.css";

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="backtotop" onClick={backToTop}>
          <p></p>
        <h4>Back to top</h4>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <strong>Get to Know Us</strong>
          </li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li>Gift a Smile</li>
        </ul>
        <ul>
          <li>
            <strong>Connect with Us</strong>
          </li>

          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <li>
            <strong>Make Money with Us </strong>
          </li>
          <li>Amazon Pay on Merchants</li>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Advertise Your Products</li>
          <li>Fulfilment by Amazon</li>
          <li>Become an Affiliate</li>
        </ul>
        <ul>
          <li>
            <strong>Let Us Help You Help</strong>
          </li>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>100% Purchase Protection</li>
        </ul>
      </div>
      <div className="footer-end">
          <p>Conditions of Use & Sale </p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
          <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
