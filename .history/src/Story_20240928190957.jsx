import React from 'react';
import Story from './Story';
import './App.css';

function App() {
  const stories = [
    { title: "Story 1", image_url: "https://placehold.co/600x300", link: "#", creator: ["Author 1"], description: "This is the first story." },
    { title: "Story 2", image_url: "https://placehold.co/600x300", link: "#", creator: ["Author 2"], description: "This is the second story." },
    // Add more stories to test
  ];

  return (
    <div className="story-container">
      {stories.map((story, index) => (
        <Story key={index} story={story} onRemove={() => {}} />
      ))}
    </div>
  );
}

export default App;
