import { RootState } from '../store';

export const selectCounter = (state: RootState) => {
  return state.counter.number;
}