import React, { useState, useEffect } from 'react';
import Story from './Story.jsx';
import sampleStories from './sample_news_stories.json'; // Ensure this path is correct
import './App.css';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Access the results array
    if (sampleStories.results) {
      setStories(sampleStories.results);
    } else {
      console.error("No results found in the JSON data.");
    }
  }, []);

  const removeStory = (link) => {
    setStories(stories.filter((story) => story.link !== link));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random News Feed</h1>
      </header>
      <div className="stories-container">
        {stories.length > 0 ? (
          stories.map((story) => (
            <Story key={story.link} story={story} onRemove={removeStory} />
          ))
        ) : (
          <p>No stories to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
