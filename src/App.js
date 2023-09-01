//import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defalutTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "Tomar el curso de introduccion a react.js", completed: false },
  { text: "La la la la", completed: false },
  { text: "La la la la Sol", completed: false },
];
function App() {
  return (
    <React.Fragment>
      {/* <div className="App"> */}
      <TodoCounter total={16} completed={25} />
      <TodoSearch />
      <TodoList>
        {defalutTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
