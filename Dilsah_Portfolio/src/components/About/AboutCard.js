import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutCard() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign:"match-parent" }}>
            Hi Everyone, I am <span className="purple">Md Dilnawaz Alam </span>
            from <span className="purple"> Nalanda, Bihar (India).</span>
            <br />
            I have completed B.Tech in civil Engineering form Roorkee College of
            Engineering Roorkee.
            <br />
            I have completed Mern Stack Development from Masai School,
            Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" data-aos="fade-right" data-os-delay ="1000">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity" data-aos="fade-right" data-os-delay="1500">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity" data-aos="fade-right" data-os-delay="2000"  >
              <ImPointRight /> Plantation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dilnawaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
