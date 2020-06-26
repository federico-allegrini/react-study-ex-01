import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <input
      type="text"
      className="UserInput"
      onChange={props.changed}
      value={props.currentValue}
    ></input>
  );
};

export default userInput;
