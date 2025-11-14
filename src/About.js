import React from "react";
import "../src/components  /css/About.css";
import two from "../src/components  /assets/two.png";
import three from "../src/components  /assets/three.png";


export default function About() {
  return (
    <div>
      <div id="about" className="container-fluid"></div>
      <div className="about-div-body">
        <div className="inside"></div>
        <div className="about-head">
          <h2>ABOUT 🧑‍💻 </h2>
          <q>Always turn a negative situation into a positive situation.</q><br></br>
        </div>
        {/* First Row */}
        <div className="row">
          <div className="first">
            <img src={three} alt="third picture"></img>
          </div>
          <div className="second">
            <p>
              As a results-driven DevOps Engineer, I have hands-on experience in designing, building, and automating CI/CD pipelines using Jenkins to ensure smooth and consistent software delivery. My expertise spans Docker containerization, Linux administration, and Shell scripting, enabling me to create efficient deployment workflows and automate system operations. I am proficient in integrating Git for version control, managing branching strategies, and optimizing build, test, and release processes to support collaborative development across teams.
            </p>
            <br></br>
            <p>
            In addition to core DevOps practices, I bring strong knowledge of Kubernetes for container orchestration and AWS for cloud infrastructure management. I focus on improving system scalability, reliability, and performance by leveraging automation and best-in-class DevOps methodologies. With a solid understanding of environment management, monitoring, and workflow optimization, I am committed to enhancing delivery efficiency and contributing to high-performing, resilient engineering environments.
            </p>

          </div>
        </div>

        {/* Second row */}
        {/* <div className="row">
          <div className="col-md-6">In </div> */}
        {/* <div className="col-md-6 fourth"></div> */}
        {/* </div> */}
      </div>
      <hr></hr>
    </div>
  );
}
