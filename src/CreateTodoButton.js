import "./CreateTodoButton.css";
function CreateTodoButton() {
  return (
    <button
      className="create-botton"
      type="button"
      onClick={() => console.log("click desde create")}
    >
      Crear Todo
    </button>
  );
}

export { CreateTodoButton };
