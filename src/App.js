import React from "react";
import "./App.css";
import GameManager from "./components/Game/GameManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Wordle (kinda)</p>
      </header>
      <main className="App-body">
        <GameManager />
      </main>
    </div>
  );
}

export default App;
