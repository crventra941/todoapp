import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro),
);

export function FiltroReducer(state, action) {
  return filtroReducer(state, action);
}