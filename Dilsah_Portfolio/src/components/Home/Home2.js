import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import AOS from "aos";
import "aos/dist/aos.css";


function Home2() {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div  >
      <Container  fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span  className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Proactive{" "}
                <span className="purple">Full Stack Web Developer</span>{" "}
                proficient in React.js and experienced in building scalable
                frontend applications.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> Html, Javascript and React. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Full fledge website </b> which includes
                  backend and frontend
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js.</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar" data-aos="zoom-in" data-aos-duration="900" >
              <Tilt >
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links" >
                <li className="social-icons" data-aos = "zoom-in">
                  <a
                    href="https://github.com/dilsah786"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons" data-aos = "zoom-in">
                  <a
                    href="https://www.linkedin.com/in/md-dilnawaz-alam-a753861a4/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <ResumeNew />
    </div>
  );
}
export default Home2;
