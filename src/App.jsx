import React, { useState, useEffect } from 'react';
import './App.css';

// Function to get a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// Function to generate a random sentence from the words array
function generateRandomSentence() {
  const words = ["I", "will", "find", "you", "in", "hell"];
  let sentenceArray = [];
  for (let i = 0; i < words.length; i++) {
    const randomIndex = getRandomInt(0, words.length);
    sentenceArray.push(words[randomIndex]);
  }
  return sentenceArray.join(" ");
}

function App() {
  const [sentences, setSentences] = useState([]);
  const [filteredSentences, setFilteredSentences] = useState([]);

  useEffect(() => {
    const initialSentences = [];
    for (let i = 0; i < 1000; i++) {
      initialSentences.push(generateRandomSentence());
    }
    setSentences(initialSentences);
    setFilteredSentences(initialSentences); // Initially, all sentences are shown
  }, []);

  const handleInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = sentences.filter(sentence => 
      sentence.toLowerCase().includes(searchValue)
    );
    setFilteredSentences(filtered);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} placeholder="Filter sentences..." />
      <div>
        {filteredSentences.map((sentence, index) => (
          <div key={index}>{sentence}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
