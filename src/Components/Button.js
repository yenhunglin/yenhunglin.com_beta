import React from "react";
import ReactDOM from "react-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div
      class="button"
      style={{
        display: "inline-block",
        width: props.width,
        height: props.height,
      }}
    >
      <a
        href={props.link}
        class="buttonText"
        style={{ lineHeight: props.height }}
        target="_blank"
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
