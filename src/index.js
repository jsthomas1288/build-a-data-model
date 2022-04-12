import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NameTag from "./NameTag.js";
import { nameData } from "./data.js";

const renderNameTag = (name) => <NameTag key={name.id} name={name.name} />;

const App = () => {
  const nameTagElements = nameData.map(renderNameTag);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {nameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
