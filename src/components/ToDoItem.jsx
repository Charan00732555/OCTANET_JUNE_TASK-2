import React from "react";

function ToDoItem(props) {
  const { text, dueDate, priority } = props.todoItem;

  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>
        <span>{text}</span> - Due Date: {dueDate.toLocaleDateString()} -
        Priority: {priority}
      </li>
    </div>
  );
}

export default ToDoItem;
