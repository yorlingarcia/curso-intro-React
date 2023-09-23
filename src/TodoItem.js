import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="item">
      <input type="checkbox" checked={props.completed} />
      <p className={`p-item ${props.completed && "p-checked"}`}>{props.text}</p>
      <button className="button-item">X</button>
    </li>
  );
}

export { TodoItem };
