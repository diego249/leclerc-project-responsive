// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
            <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>The best</li>
            <li>Brands</li>
            <li>Stats</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-right">
          <form>
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
