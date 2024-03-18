import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNetlify,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5" >
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-right" data-aos-duration="5" >
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="5" >
        <SiVercel />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
