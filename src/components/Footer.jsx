import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foo">
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <form>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="contact-currency">
          <div>
            <h5>CONTACT US</h5>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h5>CURRENCY</h5>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <div className="footer-col">
          <h5>mettä muse</h5>
          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>

        <div className="footer-col">
          <h5>QUICK LINKS</h5>
          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-col">
          <h5>FOLLOW US</h5>
          <div className="social-icons">
            <span>📷</span>
            <span>💼</span>
          </div>
          <h5>mettā muse ACCEPTS</h5>
          <div className="payments">
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
          </div>
        </div>
      </div>

      <p className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
