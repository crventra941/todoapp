// estado global

import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { TodoReducer } from './todos/todo.reducer';

import { filtrosValidos } from './filtro/filtro.actions';
import { FiltroReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[],
  filtro: filtrosValidos
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: TodoReducer,
  filtro: FiltroReducer
}
