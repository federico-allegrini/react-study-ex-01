import React from "react";

const userOutput = (props) => {
  const styleDiv = {
    background: "#efefef",
    maxWidth: "60%",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "2px 2px 3px rgb(255,255,255,0.2)",
  };
  const styleP1 = {
    color: "#555",
  };
  const styleP2 = {
    fontWeight: "bold",
    color: "#333",
  };
  return (
    <div style={styleDiv}>
      <p style={styleP1}>This is a Paragraph</p>
      <p style={styleP2}>{props.username}</p>
    </div>
  );
};

export default userOutput;
