import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [singleQuote, setSingleQuote] = useState({
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  });

  // Fetch the quotes
  useEffect(() => {
    fetch("https://johngorman-quote-server.glitch.me/quotes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setAllQuotes(data);
      });
  }, []);

  const randomQuote = () => {
    // Get and assign a random quote to 'rand'
    let rand = Math.floor(Math.random() * allQuotes.length);
    return setSingleQuote({
      quote: allQuotes[rand].quote,
      author: allQuotes[rand].author,
    });
  };

  //  const rollingQuote=()=> {
  //    setInterval(randomQuote, 3000)
  //  }

  return (
    <div className="quote-container">
      <button onClick={randomQuote}>Next</button>
      <div className="quote">
        <h1>{singleQuote.quote}</h1>
        <h2>{singleQuote.author}</h2>
      </div>
    </div>
  );
}

export default App;
