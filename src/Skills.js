import React from "react";
import "../src/components  /css/Skills.css";
// import html from "../src/components  /assets/logos/html.png";
// import css from "../src/components  /assets/logos/css.png";
// import js from "../src/components  /assets/logos/js.png";
import react from "../src/components  /assets/logos/react js.png";
import mySQL from "../src/components  /assets/logos/mySQL.png";
import python from "../src/components  /assets/logos/python.png";
import linux from "../src/components  /assets/logos/linux_PNG.png";
import docker from "../src/components  /assets/logos/docker.png";
import k8s from "../src/components  /assets/logos/kubernetes.png";
import jenkins from "../src/components  /assets/logos/jenkins.png";
import aws from "../src/components  /assets/logos/aws.png";
import ansible from "../src/components  /assets/logos/icons8-ansible-50.png";
import git from "../src/components  /assets/logos/git.png";

// pdf import
import resume from "../src/components  /assets/Resume.pdf"

const data = [
  { key: 1, imgs: git},//0
  { key: 2, imgs:  ansible},//1
  { key: 3, imgs: aws},
  { key: 4, imgs: jenkins},
  { key: 5, imgs: k8s},
  { key: 6, imgs: docker},
  { key: 7, imgs: linux},
  {key :8, imgs: python},
  { key: 9, imgs: mySQL},
  { key: 10, imgs: react},
  // {key:10, imgs: c},
  // { key: 11, imgs: redux },

]

  const SkillCard = ({ title, icon }) => {
    return (
      <div className="skill-card">
        <img src={icon}  />
      </div>
    );
  };

export default function Skills() {

  
  return (
    <div className="container-fluid">
        <div className="skills-head">
          <h2>SKILLS ⭐️ </h2>
          {/* <hr></hr> */}
          <q>Build your skills, not your resume.</q><br></br>
        </div>

      {/* <div className="row alignments">
        {" "}
        {data1.map((item) => (
          <div className="col-3 ">
            <div className="skill-card">
              <img src={item.imgs}></img>
            </div>
          </div>
        ))}
         {data2.map((item) => (
          <div className="col-3 ">
            <div className="skill-card">
              <img src={item.imgs}></img>
            </div>
          </div>
        ))}
      </div> */}
       <div className="skill-card-wrapper">
        {data.map((skill) => (
          <SkillCard key={skill.key} icon={skill.imgs} />
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


