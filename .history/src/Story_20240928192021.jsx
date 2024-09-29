// src/Story.jsx
import React from 'react';
import './Story.css';

function Story({ story, onRemove }) {
  // Extract the necessary fields
  const { title, image_url, link, creator, description } = story;

  return (
    <div className="story-card">
      {/* Use a placeholder image if `image_url` is missing */}
      <img
        src={image_url ? image_url : "https://placehold.co/300x150"}
        alt="story"
        className="story-image"
      />
      <div className="story-content">
        {/* Title and link */}
        <h2 className="story-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>

        {/* Story description */}
        <p className="story-description">{description}</p>

        {/* Story author */}
        <p className="story-author"><strong>By:</strong> {creator ? creator[0] : "Unknown"}</p>

        {/* Remove button */}
        <button className="remove-button" onClick={() => onRemove(story.id)}>Remove</button>
      </div>
    </div>
  );
}

export default Story;
