import React from "react";
import "./css/Skills.css";


function Card({imgs}) {
  return (
    <div>
      <div className="row alignments">
        <div className="col-3">
          <div className="skill-card">
            <img src={imgs}></img>
            {/* key={item.key} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
