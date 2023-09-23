//import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

import logo from "./assets/svg/undraw_add_tasks_re_s5yj.svg";

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
          <label>Task Name</label>
          <input type="text" placeholder="Cortar cebolla" />
          <CreateTodoButton />
          <img className="image" src={logo} alt="Tareas" />
        </div>
        <div className="seccion">
          <div>
            <h1>Your Task</h1>
            <TodoCounter total={16} completed={25} />

            <TodoSearch />
          </div>
          <div className="filtros">
            <button>Todos</button>
            <button>Pendientes</button>
            <button>Completados</button>
          </div>
          <div>
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
      </div>
      {/* <div className="App"> */}
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
