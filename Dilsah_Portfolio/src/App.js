import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Pre from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ResumeNew from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
      </Router>
    </div>

  );
};

export default App;
