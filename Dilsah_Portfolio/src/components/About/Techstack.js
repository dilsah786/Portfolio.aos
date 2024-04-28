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
import {
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
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
        <p className="tech_name" >Java</p>
      </Col>{" "}
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <TiHtml5 />
        <p className="tech_name" >Html</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <TiCss3 />
        <p className="tech_name" >CSS</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiJavascript1 />
        <p className="tech_name" >JavaScript</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiTypescript />
        <p className="tech_name" >TypeScript</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiReact />
        <p className="tech_name" >React.js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiVite />
        <p className="tech_name" >Vite</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiTailwindcss />
        <p className="tech_name" >Tailwindcss</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiNodejs />
        <p className="tech_name" >Node.js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiMongodb />
        <p className="tech_name" >MongoDB</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiNextdotjs />
        <p className="tech_name" >Next.js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiExpress />
        <p className="tech_name" >Express.js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <DiGit />
        <p className="tech_name" >Git</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <SiFirebase />
        <p className="tech_name" >Firebase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
