import { useState } from "react";
import "./App.css";

export default function App() {
  const [isNight, setNight] = useState(false);
  return (
    <div className={isNight ? "night" : ""}>
      <Header
        night={isNight}
        onClick={() => setNight(true)}
        onClick2={() => setNight(false)}
      />
      <div className="search-container">
        <Search />
      </div>
    </div>
  );
}

function Header({ night, onClick, onClick2 }) {
  return (
    <header>
      <a href="">booksTracker</a>
      {!night ? (
        <button onClick={onClick}>D</button>
      ) : (
        <button onClick={onClick2}>N</button>
      )}
    </header>
  );
}

function Search() {
  return (
    <section>
      <input
        className="textBox"
        placeholder="Enter your current reading book ..."></input>
    </section>
  );
}
