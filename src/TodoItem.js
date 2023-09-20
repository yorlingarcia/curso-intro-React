import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="item">
      <input type="checkbox" />
      <span>V {props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
