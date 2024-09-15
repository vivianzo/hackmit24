import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const post = ({ title, text }) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-text">{text}</p>
      <div className="post-btn">
        <Link className="cursor-pointer" to="/response-page">
          Respond to Post{" "}
        </Link>
      </div>
    </div>
  );
};

export default post;
