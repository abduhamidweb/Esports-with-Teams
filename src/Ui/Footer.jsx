import React from "react";
import "./Footer.css";
import FooterLogo from "../images/footer-lg.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="wrapper d-flex justify-content-between">
            <div className="left-wrap">
              <div className="footer-logo d-flex">
                <img
                  src={FooterLogo}
                  alt="footer-logo"
                  className="footer-logo-img"
                />
                <span className="footer-logo-body text-dark">
                  <h4 className="footer-logo-title"> Esports</h4>
                  <h6 className="footer-logo-deck">Multiplayer Games</h6>
                </span>
              </div>
              <p className="left-wrap-deck">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <h3 className="fallow-title">Follow Us</h3>

              <div className="footer-links">
                <a href="#">
                  <i className="bi bi-facebook "></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram instagram"></i>
                </a>
              </div>
            </div>
            <div className="right-wrap d-flex">
              <ul className="footer-list footer-listOrder1">
                <li className="footer-item">
                  <a href="#" className="footer-link link2">
                    Games Categories
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Pubg
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Cod
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    VOA
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    ApexLegend
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    warzone
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    bgmi
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link link3">
                    View more <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
              <ul className="footer-list footer-listOrder2">
                <li className="footer-item">
                  <a href="#" className="footer-link link2">
                    Quick Links
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    About us
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Games
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Login
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Sign Up
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
              </ul>
              <ul className="footer-list footer-list2">
                <li className="footer-item">
                  <a href="#" className="footer-link link2">
                    Our company
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23955.37413960941!2d69.1989805316162!3d41.3649204360651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8e78abb7cc99%3A0xe4c4a6d6f6fe359c!2z0JzQsNGF0LDQu9C70Y8g0JHQtdGI0LrRg9GA0LPQvtC9!5e0!3m2!1sru!2s!4v1675784477670!5m2!1sru!2s"
                      className="footer-iframe"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </a>
                </li>
                <li className="footer-item">
                  <div className="footer-location">
                    <span>
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <p>
                      Address Line 1, Address Line 2, Lucknow, India - 226028
                    </p>
                  </div>
                </li>
                <li className="footer-item">
                  <div className="footer-call">
                    <span>
                      <i className="bi bi-telephone"></i>
                    </span>
                    <p>+91 5224527336</p>
                  </div>
                </li>
                <li className="footer-item">
                  <div className="footer-mail">
                    <span>
                      <i className="bi bi-envelope"></i>
                    </span>
                    <p>fourangerygod@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};



export default Footer;
