import React from "react";
import "./styles.css";

// Sample Data
const data = [
  { title: "Story 1", image_url: "https://example.com/image1.jpg" },
  { title: "Story 2", image_url: "https://example.com/image2.jpg" },
  { title: "Story 3", image_url: "https://example.com/image3.jpg" },
];

const StoryFeed = () => {
  return (
    <div className="story-feed">
      {data.map((story, index) => (
        <div className="story-card" key={index}>
          <div className="image-container">
            <img
              src={story.image_url || "https://placehold.co/300x150"}
              alt={story.title || "story"}
              className="story-image"
            />
          </div>
          <h3 className="story-title">{story.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StoryFeed;
