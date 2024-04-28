import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiNetlify />
        <p className="tech_name" >Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5">
        <SiGithub />
        <p className="tech_name" >Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiVisualstudiocode />
        <p className="tech_name" >Vs Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5" >
        <SiPostman />
        <p className="tech_name" >Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiSlack />
        <p className="tech_name" >Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5" >
        <SiVercel />
        <p className="tech_name" >Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5" >
        <SiFigma />
        <p className="tech_name" >Figma</p>
      </Col>

      
    </Row>
  );
}

export default Toolstack;
