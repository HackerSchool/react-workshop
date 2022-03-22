import "./App.css";
import GameSquares from "./components/Game/GameSquares";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Wordle (kinda)</p>
      </header>
      <main className="App-body">
        <GameSquares />
        <Keyboard />
      </main>
    </div>
  );
}

export default App;
