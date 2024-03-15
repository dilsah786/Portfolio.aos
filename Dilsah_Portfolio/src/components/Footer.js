import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaFileContract, FaLinkedinIn, FaPhone } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dilnawaz </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Dil</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          
          <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-dilnawaz-alam-a753861a4/"
                style={{ color: "white",textDecoration:"none"}}
                target="_blank"
                rel="noopener noreferrer"
              >
             
                <span> <FaPhone /> +917739363640</span>
              </a>
            </li>
            <li className="social-icons">
              <a 
                href="https://www.gmail.com"
                style={{ color: "white",textDecoration:"none"}}
                target="_blank"
                rel="noopener noreferrer"
              >
             
                <span> <MdEmail />  mddilnawazalam7739@gmail.com
                </span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/dilsah786"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/md-dilnawaz-alam-a753861a4/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
