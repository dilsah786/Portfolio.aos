import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Github() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}  data-aos='zoom-in' data-aos-duration="800" data-aos-easing="ease-in-out" >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="dilsah786"
        blockSize={20}
        blockMargin={5}
        color="#c084f5"
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
