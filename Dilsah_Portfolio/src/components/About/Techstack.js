import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function Techstack() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiJava />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <TiHtml5 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <TiCss3 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiJavascript1 />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiTypescript/>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiReact />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiVite />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiTailwindcss />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiNodejs />
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiMongodb />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiNextdotjs />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiExpress/>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiGit />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
