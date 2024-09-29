import React, { useState, useEffect } from 'react';
import Story from './Story.jsx';
import sampleStories from './sample_news_stories.json';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Load the sample stories on component mount
    setStories(sampleStories);
  }, []);

  const removeStory = (id) => {
    setStories(stories.filter((story) => story.link !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random News Feed</h1>
      </header>
      <div className="stories-container">
        {stories.map((story) => (
          <Story key={story.link} story={story} onRemove={removeStory} />
        ))}
      </div>
    </div>
  );
}

export default App;
