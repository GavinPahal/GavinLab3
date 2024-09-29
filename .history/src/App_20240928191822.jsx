// src/App.jsx
import React, { useState, useEffect } from 'react';
import Story from './Story';
import sampleStories from './sample_news_stories.json';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(sampleStories);
  }, []);

  // Function to remove a story by ID
  const removeStory = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random News Feed</h1>
      </header>
      <div className="story-list">
        {stories.map((story) => (
          <Story key={story.id} story={story} onRemove={removeStory} />
        ))}
      </div>
    </div>
  );
}

export default App;
