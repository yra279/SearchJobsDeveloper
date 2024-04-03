import { createStore } from "redux";
import { rootRecucer } from './reducers/index';


export const configStore = () => createStore(
    rootRecucer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);