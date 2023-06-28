import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, usingPropsAndActions } from '../actions/counter.actions';

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState
// );

// export function counterReducer(state: number = initialState): number {
//   return state;
// }

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => (state !== 0 ? state - 1 : 0)),
  on(reset, (state) => (state = 0)),
  on(usingPropsAndActions, (state, actions: any)=> actions.value)
);
