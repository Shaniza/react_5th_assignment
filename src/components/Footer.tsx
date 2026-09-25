import "./Footer.css";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="footer">

      

      <div className="footer-main">

       
        <div className="footer-brand">

          <img
            src={logo}
            alt="DevStack Logo"
            className="footer-logo"
          />

          <p>
            Build better projects with the right
            technology stack for your next idea.
          </p>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>


    
        <div className="footer-column">

          <h3>Product</h3>

          <a href="#home">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h3>Company</h3>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#careers">
            Careers
          </a>

        </div>


        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms & Conditions
          </a>

        </div>

      </div>


    
      <div className="footer-bottom">

        <p>
         @2026 DevStack. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">
            Privacy
          </a>

          <a href="#terms">
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;