import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
    <Container className="py-5">
      <Row>
        <Col md={3} sm={6} className="text-center mb-4">
          <h5>About ProShop</h5>
          <p>ProShop is your one-stop shop for all things tech. From electronics to accessories, we’ve got you covered.</p>
        </Col>

        <Col md={3} sm={6} className="text-center mb-4">
          <h5>Customer Service</h5>
          <ul className="list-unstyled">
            <li><Link to="/help" className="text-decoration-none text-white">Help & Support</Link></li>
            <li><Link to="/returns" className="text-decoration-none text-white">Returns</Link></li>
            <li><Link to="/shipping" className="text-decoration-none text-white">Shipping Info</Link></li>
            <li><Link to="/faq" className="text-decoration-none text-white">FAQs</Link></li>
          </ul>
        </Col>

        <Col md={3} sm={6} className="text-center mb-4">
          <h5>Company</h5>
          <ul className="list-unstyled">
            <li><Link to="/about" className="text-decoration-none text-white">About Us</Link></li>
            <li><Link to="/careers" className="text-decoration-none text-white">Careers</Link></li>
            <li><Link to="/blog" className="text-decoration-none text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-decoration-none text-white">Contact</Link></li>
          </ul>
        </Col>

        <Col md={3} sm={6} className="text-center mb-4">
          <h5>Follow Us</h5>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white mx-2">
              <FaLinkedin size={24} />
            </a>
          </div>
        </Col>
      </Row>

      <hr style={{ borderTop: "1px solid #555" }} />

      <Row>
        <Col className="text-center py-3">
          &copy; {new Date().getFullYear()} ProShop. All rights reserved.
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;
