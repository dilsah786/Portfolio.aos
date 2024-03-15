import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCards(props) {

  useEffect(()=>{
     AOS.init();
  },[])

  return (
    <Card className="project-card-view"  >
      <Card.Img    variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title data-aos="zoom-in" data-aos-delay="10" >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" data-aos="flip-right" >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button  data-aos="flip-left"
            data-aos-delay="15"
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
