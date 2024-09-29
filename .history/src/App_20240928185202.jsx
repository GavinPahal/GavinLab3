import React, { useState } from 'react';
import Story from './Story';
import './Story.css';

const App = () => {
  const [stories, setStories] = useState([
    {
      title: "Story 1",
      image_url: "https://placehold.co/300x150",
      link: "#",
      creator: ["Author 1"],
      description: "This is the first story."
    },
    {
      title: "Story 2",
      image_url: "https://placehold.co/300x150",
      link: "#",
      creator: ["Author 2"],
      description: "This is the second story."
    },
    // Add more stories as needed
  ]);

  const handleRemove = (link) => {
    setStories(stories.filter((story) => story.link !== link));
  };

  return (
    <div className="story-container">
      {stories.map((story) => (
        <Story key={story.link} story={story} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default App;
