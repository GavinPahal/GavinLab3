import React, { useState, useEffect } from 'react';
import Story from './Story.jsx';
import sampleStories from './sample_news_stories.json';
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    console.log("Loaded stories:", sampleStories);
    setStories(sampleStories);
  }, []);

  const removeStory = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Random News Feed</h1>
      </header>
      <div className="story-list">
        {stories.length > 0 ? (
          stories.map((story) => (
            <Story key={story.id} story={story} onRemove={removeStory} />
          ))
        ) : (
          <p>No stories to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
