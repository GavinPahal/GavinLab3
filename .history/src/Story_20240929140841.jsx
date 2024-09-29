import React from 'react';
import './Story.css';

function Story({ story, onRemove }) {
  const { title, image_url, link, creator, description } = story;

  return (
    <div className="story-card">
      <div className="remove-button" onClick={() => onRemove(link)}>✖</div>
      <div className="image-container">
        <img
          src={image_url || "https://dummyimage.com/120x120/cccccc/cccccc.png"} // Solid grey placeholder
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
