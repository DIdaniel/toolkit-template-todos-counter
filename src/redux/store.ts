import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./features/counterSlice";
import {todosSlice} from "./features/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const {
  increment,
  decrement
} = counterSlice.actions

export const {
  changeInput,
  insert,
  toggle,
  remove
} = todosSlice.actions

export default store;
