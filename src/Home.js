import React from "react";
import Header from "./Header";
import "../src/components  /css/Home.css";
import img from"../src/components  /assets/one.JPG"
import About from "./About";
import Skills from "./Skills"
import Project1 from "./Project1";
import Contact from "./Contact"

export default function Home() {
  return (
    <div className="home-body container-fluid">
      {/* <Header></Header> */}
      <div className="main-div">
     
        <div className="div-one"><h1>Hey👋🏻, I am Rijin....</h1>
        <h4>Software Developer..</h4></div> 
        <div className="div-two"></div>
      </div>
      <hr></hr>
      <div id="about">
      <About/>
      </div>
      <Skills/> 
      <Project1/>
      <Contact/>
    </div>
  );
}
;
