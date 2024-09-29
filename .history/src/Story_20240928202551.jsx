<div className="story-card">
  <div className="image-container">
    <img
      src={image_url || "https://placehold.co/300x150"}
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
    <div className="remove-button-container">
      <button className="remove-button" onClick={() => onRemove(link)}>X</button>
    </div>
  </div>
</div>
