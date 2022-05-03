import React, { memo } from "react";

type TodoFormProps = {
  // todo: [{ id: number; text: string; done: boolean }];
  todo: any;
  onToggle: Function;
  onRemove: Function;
};

const TodoForm = ({ todo, onToggle, onRemove }: TodoFormProps) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>DELETE</button>
    </div>
  );
};

export default memo(TodoForm);
