//import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

import "./App.css";

const defalutTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "Tomar el curso de introduccion a react.js", completed: false },
  { text: "La la la la", completed: false },
  { text: "La la la la Sol", completed: false },
];
function App() {
  return (
    <React.Fragment>
      <div className="cuerpo-principal">
        <div className="seccion">
          <h1>Create new Task</h1>
          <form>
            <label>Task Name</label>
            <input type="text" placeholder="Cortar cebolla" />
            <CreateTodoButton />
          </form>
        </div>
        <div className="seccion">
          <div>
            <h1>Your Task</h1>
            <TodoCounter total={16} completed={25} />
            <form>
              <TodoSearch />
            </form>
          </div>
          <TodoList>
            {defalutTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </div>
      </div>
      {/* <div className="App"> */}
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
