// src/Story.js
import React from 'react';

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
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {description}
          </a>
        </h3>
        <p><strong>Author:</strong> {creator ? creator : "Unknown"}</p>
        <button onClick={() => onRemove(story.id)}>Remove</button>
      </div>
    </div>
  );
}

export default Story;
