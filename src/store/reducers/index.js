import { combineReducers } from "redux";

import { filterTagTodos } from './filterTagTodos-reducer';

export const rootRecucer = combineReducers({
    filterTagTodos,
});