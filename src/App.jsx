import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [isNight, setNight] = useState(false);
  const [book, setBooks] = useLocalStorageState([], "books");

  function addBooks(book) {
    setBooks((books) => [...books, book]);
  }

  function handleNight() {
    setNight(!isNight);
  }

  function handleDelete(id) {
    setBooks((book) => book.filter((book) => book.id !== id));
  }

  useEffect(
    function () {
      try {
        if (book.length > 0) {
          const storedBooks = localStorage.setItem(
            "books",
            JSON.stringify(book)
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    [book]
  );

  return (
    <main className={isNight ? "night" : ""}>
      <div>
        <Header night={isNight} onClick={handleNight} onClick2={handleNight} />
        <div className="search-container">
          <Search isNight={isNight} onAddBooks={addBooks} />
        </div>
        <div>
          <BookList book={book} night={isNight} onDelete={handleDelete} />
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
    const newBook = { name: input, id: Math.floor(Math.random() * 10) };
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

function BookList({ book, onDelete }) {
  return (
    <ul>
      {book.map((book) => (
        <Book book={book} key={book.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}

function Book({ book, onDelete }) {
  console.log(book);
  return (
    <li>
      {book.name}
      <span className="delete" onClick={() => onDelete(book.id)}>
        ❌
      </span>
    </li>
  );
}
