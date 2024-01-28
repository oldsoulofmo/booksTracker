import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [isNight, setNight] = useState(false);
  const [book, setBooks] = useState([]);

  function addBooks(book) {
    setBooks((books) => [...books, book]);
  }

  function handleNight() {
    setNight(!isNight);
  }

  return (
    <main className={isNight ? "night" : ""}>
      <div>
        <Header night={isNight} onClick={handleNight} onClick2={handleNight} />
        <div className="search-container">
          <Search isNight={isNight} onAddBooks={addBooks} />
        </div>
        <div>
          <BookList book={book} night={isNight} />
        </div>
      </div>
    </main>
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

function Search({ isNight, onAddBooks }) {
  const [input, setInput] = useState("");
  function handleForm(e) {
    e.preventDefault();
    if (!input) return;
    const newBook = { name: input };
    console.log(input);
    console.log(newBook);
    onAddBooks(newBook);
    setInput("");
  }
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        value={input}
        className={!isNight ? "textBox-day" : "textBox"}
        placeholder="What are you reading ?"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

function BookList({ book }) {
  return (
    <ul>
      {book.map((book) => (
        <Book book={book} />
      ))}
    </ul>
  );
}

function Book({ book }) {
  console.log(book);
  return <li>{book.name}</li>;
}
