import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div>
      <div class="grid-item">
        <a href={props.link} target="blank">
          <div class="overlay-container">
            <div class="overlay">
              <p>{props.title}</p>
            </div>
          </div>
          <img src={props.img} />

          <div class="info">
            <h4 class="project-name">{props.type}</h4>
            <h4 class="project-type">{props.sorce}</h4>
            <h4 class="project-new">{props.new}</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
