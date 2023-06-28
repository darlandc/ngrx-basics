import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment'
  // props<{ value: number }>()
);
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const usingPropsAndActions = createAction(
  '[Counter] Using Props n Actions',
  props<{ value: string }>()
);
