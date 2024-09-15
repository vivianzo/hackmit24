import React from 'react'
import "./post.css"

const post = ({
  title,
  text
}
) => {
  

  return (
    <div className= "post-container">
      <h2 className= "post-title">{title}</h2>
      <p className = "post-text">{text}</p>
      <a href= "response_page" className= "post-btn"> Respond to Post</a>
      
    </div>
  )
}

export default post
