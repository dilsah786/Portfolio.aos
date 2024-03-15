import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/autoparts.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/adventour.png";
import voyawander from "../../Assets/Projects/voyawander.png";
import suicide from "../../Assets/Projects/myntra.png";
import gem_garden from "../../Assets/Projects/gem_garden.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          className="dil_projects"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
          >
            <ProjectCard
              imgPath={gem_garden}
              isBlog={false}
              title={
                <strong className="project_title">
                  Gem-Garden Jewellery Shop
                </strong>
              }
              description={
                <ul>
                  <li>
                    This is a shopping wbsite for different types of Clothes and
                    other products.
                  </li>
                  <li>
                    There are add to Cart functionality and checkout Page.
                  </li>
                  <li>
                    In homepage sliding Show of products and some carousel also
                    to show the product.
                  </li>
                  <li>
                    Collaborative Project with the team size of 4 members in the
                    duration of one week.
                  </li>
                </ul>
              }
              ghLink="https://github.com/dilsah786/gem-garden-jewelry-store"
              demoLink="https://gem-garden-jewelry-store.vercel.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
          >
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<strong className="project_title">Adventour .com</strong>}
              description={
                <ul>
                  <li>
                    This is a travel website where user can book his destination
                    according to their choice for travelling.
                  </li>
                  <li>
                    You can book destination all around the world and book
                    hotels with us. You can view all the details of hotel rooms
                    with easy.
                  </li>
                  <li>
                    Login page , signup page and Payment page are also
                    implemented here.
                  </li>
                  <li>
                    Collaborative Project with the team size of five members in
                    the duration of one week.
                  </li>
                </ul>
              }
              ghLink="https://github.com/dilsah786/Adventour"
              demoLink="https://adventour-e3im-git-booking-monurajputrko.vercel.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
          >
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={<strong className="project_title">Autoparts .com</strong>}
              description={
                <ul>
                  <li>
                    Online store of spare parts of car where user can explore
                    the page and go through it.
                  </li>
                  <li>
                    There are add to cart functionality and increase or decrease
                    the items also.
                  </li>
                  <li>
                    CheckOut and Payment page also implemented where user go to
                    payment.
                  </li>
                  <li>
                    Collaborative Project with the team size of five members in
                    the duration of one week.
                  </li>
                </ul>
              }
              ghLink="https://github.com/dilsah786/AutoParts"
              demoLink="https://flourishing-cucurucho-4763d6.netlify.app/index.html"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
          >
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={<strong className="project_title">Myntra .com</strong>}
              description={
                <ul>
                  <li>
                    This is an ecommerce shopping website for different types of
                    Clothes and other products.
                  </li>
                  <li>
                    There are login/Signup, Products Page, Single Product, Add
                    to Cart and checkOut Page functionality.{" "}
                  </li>
                  <li>
                    In homepage sliding Show of products and some carousel also
                    to show the product.
                  </li>
                  <li>
                    Collaborative Project with the team size of 4 members in the
                    duration of one week.
                  </li>
                </ul>
              }
              ghLink="https://github.com/dilsah786/Myntra-Ecommerce-Clone"
              demoLink="https://myntra8.netlify.app/"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="500"
          >
            <ProjectCard
              imgPath={voyawander}
              isBlog={false}
              title={<strong className="project_title">Voyawander .com</strong>}
              description={
                <ul>
                  <li>
                    This is a travel website where user can book his destination
                    according to their choice for travelling.
                  </li>
                  <li>
                    You can book destination all around the world and book
                    hotels with us. You can view all the details of hotel rooms
                    with easy.
                  </li>
                  <li>
                    Login page , signup page and Payment page are also
                    implemented here.
                  </li>
                  <li>
                    Collaborative Project with the team size of five members in
                    the duration of one week.
                  </li>
                </ul>
              }
              ghLink="https://github.com/dilsah786/Voyawander"
              demoLink="https://voyawander-cw.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
