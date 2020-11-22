import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:33PM"
          text="WOW"
          avatar="https://source.unsplash.com/random"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 3:00PM"
          text="Great!"
          avatar="https://source.unsplash.com/random"
        />
      </ApprovalCard>

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
