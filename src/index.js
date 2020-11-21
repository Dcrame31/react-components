import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
      </div>
      <a href="/" className="author">
        <Samp></Samp>
      </a>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
      <div className="text">Nice blog post!</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
