import React from "react";

export default function Posts({ postdata }) {
  return (
    <div className="post">
      <h2>Post {postdata.id}</h2>
      <div>
        <h3 className="title">{postdata.title}</h3>
        <p className="post_body">{postdata.body}</p>
        <p className="user">User: {postdata.userId}</p>
      </div>
    </div>
  );
}
