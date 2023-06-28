import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, set } from '../actions/counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => (state >= 1 ? state - action.value : 0)),
  on(reset, (state) => (state = 0)),
  on(set, (state, action) => action.value)
);
