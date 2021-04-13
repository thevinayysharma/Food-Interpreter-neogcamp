import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍟": "Frech-fries",
  "🍕": "Pizza",
  "🍪": "Cookie",
  "🎂": "Cake",
  "🍔": "Hamburger",
};


export default function App() {
var emojiWeKnow = Object.keys(foodDictionary);

  const [meaning, setMeaning ] = useState("");

  function inputeventHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];

    if( meaning === undefined ){
      meaning = "Oops! Food not found in database";
    }
    setMeaning(meaning);
  }


  function emojiClickHandler(emoji){
  var meaning = foodDictionary[emoji];
  setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Food Interpreter Zone </h1>
      <input onChange = { inputeventHandler } />
      <h2>{ meaning }</h2>
      <h2> Food you know </h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

