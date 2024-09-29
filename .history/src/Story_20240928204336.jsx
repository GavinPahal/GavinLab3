import React from 'react';
import './Story.css';

function Story({ story, onRemove }) {
  const { title, image_url, link, creator, description } = story;

  return (
    <div className="story-card">
      <div className="remove-button" onClick={() => onRemove(link)}>✖</div>
      <div className="image-container">
        <img
          src={image_url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dtransparent&psig=AOvVaw2czRQHHCQ7aJeVnfeQ0sp1&ust=1727667812269000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCygKKe54gDFQAAAAAdAAAAABAE"}
          alt={title || "story"}
          className="story-image"
        />
      </div>
      <div className="story-content">
        <h3 className="story-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="story-description">{description}</p>
        <p className="story-author">By: {creator ? creator[0] : "Unknown"}</p>
      </div>
    </div>
  );
}

export default Story;
