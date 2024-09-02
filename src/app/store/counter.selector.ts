import { createSelector } from '@ngrx/store';

export const selectCounter = (state: number) => state;
export const countAll = createSelector(selectCounter, state => state);
