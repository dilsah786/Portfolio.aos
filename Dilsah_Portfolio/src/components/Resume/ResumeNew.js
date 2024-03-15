import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Md Dilnawaz Alam Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import AOS from 'aos';
import 'aos/dist/aos.css';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const downloadResume = () => {
    const pdfUrl = "Md Dilnawaz Alam Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    window.open("Md Dilnawaz Alam Resume.pdf");
    link.download = "Md Dilnawaz Alam Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div>
      <Container fluid className="resume-section"  >
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button onClick={downloadResume}
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" data-aos="zoom-in" data-aos-duration="900" >
          <Document file={pdf} className="d-flex justify-content-center" >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button onClick={downloadResume}
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
