// src/Story.jsx
import React from 'react';
import './Story.css';

function Story({ story, onRemove }) {
  const { image_url, link, creator, description } = story;

  return (
    <div className="story-card">
      <img
        src={image_url ? image_url : "https://placehold.co/200x100"}
        alt="story"
        className="story-image"
      />
      <div className="story-content">
        <p className="story-description">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {description}
          </a>
        </p>
        <p className="story-author"><strong>By:</strong> {creator ? creator : "Unknown"}</p>
        <button className="remove-button" onClick={() => onRemove(story.id)}>Remove</button>
      </div>
    </div>
  );
}

export default Story;
