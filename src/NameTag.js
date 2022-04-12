// import the react library to write JSX
import React from "react";

// Functional Component that will be rendered in the index.js file
const NameTag = (prompts) => {
  return (
    <div className="name-tag">
      <h3 className="title">HELLO</h3>
      <p className="subtitle">my name is</p>
      <h2 className="name">{prompts.name}</h2>
    </div>
  );
};

export default NameTag;
