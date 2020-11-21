import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 5:33PM"
        text="WOW"
        avatar="https://source.unsplash.com/random"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 3:00PM"
        text="Great!"
        avatar="https://source.unsplash.com/random"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 6:01AM"
        text="Sweeeeet"
        avatar="https://source.unsplash.com/random"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
