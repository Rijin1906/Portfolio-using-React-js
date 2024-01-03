import React from "react";
import "../src/components  /css/Skills.css";
import html from "../src/components  /assets/logos/html.png";
import css from "../src/components  /assets/logos/css.png";
import bts from "../src/components  /assets/logos/bootstrap.png";
import js from "../src/components  /assets/logos/js.png";
import react from "../src/components  /assets/logos/react js.png";
import redux from "../src/components  /assets/logos/redux.png"
import java from "../src/components  /assets/logos/java.png";
import sql from "../src/components  /assets/logos/sql.png";
import python from "../src/components  /assets/logos/python.png";
import c from "../src/components  /assets/logos/c.png";


// pdf import
import resume from "../src/components  /assets/Resume.pdf"

const data = [
  { key: 1, imgs: html},
  { key: 2, imgs: css },
  { key: 3, imgs:js },
  { key: 4, imgs: bts },
  { key: 5, imgs:react  },
  { key: 6, imgs:redux  },
  { key: 7, imgs: java },
  { key: 8, imgs: sql },
  {key :9, imgs: python},
  {key:10, imgs: c}
  // { key: 8, imgs: p1 }
];

export default function Skills() {

  
  return (
    <div className="container-fluid">
        <div className="skills-head">
          <h2>SKILLS ⭐️ </h2>
          {/* <hr></hr> */}
          <q>Build your skills, not your resume.</q><br></br>
        </div>

    




      <div className="row alignments">
        {" "}
        {data.map((item) => (
          <div className="col-3">
            <div className="skill-card">
              <img src={item.imgs}></img>
            </div>
          </div>
        ))}
      </div>

      <div className="skill-resume">
        <h5>You can download my cv from here..</h5>
       <button className="btn btn-outline-info"> <a href={resume}>Download here </a></button>
      </div>
      <hr></hr>
    </div>
  );
}

