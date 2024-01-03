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
          <div className="col-md-6 first">
            <img src={three} alt="third picture"></img>
          </div>
          <div className="col-md-6 second">
            <p>
              As a passionate front-end and Java developer, I bring together my
              expertise in both user-facing web development and server-side
              programming to create comprehensive and engaging web applications.
              With a strong foundation in HTML, CSS, and JavaScript, I craft
              intuitive and visually appealing interfaces that deliver a
              seamless user experience.
            </p>
            <br></br>
            <p>
              Combining my front-end and Java skills, I excel at integrating
              user interactions with server-side logic, ensuring seamless
              communication between the client and the server. I am well-versed
              in API integration, enabling me to fetch and display data from the
              server-side to enhance the user experience.
            </p>
            <br></br>
            <p>
              I am a highly motivated and results-oriented individual with a
              strong work ethic and a passion for web development. I am always
              eager to take on new challenges and learn new things. I am
              confident that my skills make me a valuable asset
              to any team. I am eager to contribute my expertise to creating
              innovative and user-friendly web applications.
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
