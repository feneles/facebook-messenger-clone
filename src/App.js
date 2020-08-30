import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleButton = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="app">
      <h1>elo</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleButton}>Send message</button>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
