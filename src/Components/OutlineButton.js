import React from "react";
import ReactDOM from "react-dom";
import "./OutlineButton.css";

const OutlineButton = (props) => {
  return (
    <div
      class="outlineButton"
      style={{
        display: "inline-block",
        width: props.width,
        height: props.height,
      }}
    >
      <a
        href={props.link}
        class="outlineButtonText"
        style={{ lineHeight: props.height }}
        target="_blank"
      >
        {props.text}
      </a>
    </div>
  );
};

export default OutlineButton;
