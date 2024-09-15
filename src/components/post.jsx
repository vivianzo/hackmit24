import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const post = ({ title, text, imgURL}) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{title}</h2>
      <p className="post-text">{text}</p>
      <img src={imgURL} alt="" />
      <div className="px-4 py-2 text-pretty">
        <div className="post-btn">
          <Link className="cursor-pointer" to="/response-page">
            Respond to Post{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default post;
