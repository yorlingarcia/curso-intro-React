import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="item">
      <label className="prueba">
        <input type="checkbox" checked={props.completed} className="i-prueba" />
        <span className="s-prueba"></span>
      </label>
      <p className={`p-item ${props.completed && "p-checked"}`}>{props.text}</p>
      <button className="button-item">X</button>
    </li>
  );
}

export { TodoItem };
