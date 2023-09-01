//import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoItem />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
