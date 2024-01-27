import { MdDarkMode, MdLightMode } from "react-icons/md";
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
        <Search isNight={isNight} />
      </div>
    </div>
  );
}

function Header({ night, onClick, onClick2 }) {
  return (
    <header>
      <a href="">
        <span className={night ? "a" : ""}>booksTracker</span>
      </a>
      {!night ? (
        <MdDarkMode size={25} onClick={onClick} />
      ) : (
        <MdLightMode size={25} color="white" onClick={onClick2} />
      )}
    </header>
  );
}

function Search({ isNight }) {
  return (
    <section>
      <input
        className={!isNight ? "textBox-day" : "textBox"}
        placeholder="Enter your current reading book ..."></input>
    </section>
  );
}
