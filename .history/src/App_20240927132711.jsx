// src/App.js
import React, { useState, useEffect } from 'react';
import Story from './Story';
import sampleStories from './sample_news_stories.json';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  // Load sample stories on component mount
  useEffect(() => {
    setStories(sampleStories);
  }, []);

  // Remove a story by ID
  const removeStory = (id) => {
    const filteredStories = stories.filter((story) => story.id !== id);
    setStories(filteredStories);
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="story-list">
        {stories.map((story) => (
          <Story key={story.id} story={story} onRemove={removeStory} />
        ))}
      </div>
    </div>
  );
}

export default App;
