import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="item mycheck">
      <input type="checkbox" />
      <span>V {props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
