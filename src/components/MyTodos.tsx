import React, { useState, memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { selectTodos } from "../redux/hook/todos";
import { changeInput, insert, toggle, remove } from "../redux/store";
import TodoForm from "./TodoForm";

const MyTodos = () => {
  const dispatch = useAppDispatch();
  const { input, todos } = useAppSelector(selectTodos);

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(insert(input));
      dispatch(changeInput(""));
    },
    [input]
  );

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeInput(e.target.value));
    },
    []
  );
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={changeHandler} />
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <TodoForm
              key={todo.id}
              todo={todo}
              onToggle={() => dispatch(toggle(todo.id))}
              onRemove={() => dispatch(remove(todo.id))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(MyTodos);
