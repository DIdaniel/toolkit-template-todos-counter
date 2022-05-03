import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  input: string;
  todos: { id: number; text: string; done: boolean }[];
};

const initialState: initialStateType = {
  input: "",
  todos: [],
};

let id = 1;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeInput: (state, { payload: input }) => {
      state.input = input;
    },
    insert: (state, action) => {
      console.log(current(state));
      const todo = {
        id: id++,
        text: action.payload,
        done: false,
      };
      state.todos.push(todo);
    },
    toggle: (state, { payload: id }) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].done = !state.todos[index].done;
    },
    remove: (state, { payload: id }) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
  },
});
