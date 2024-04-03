import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configStore } from "./store/index";
import { Provider } from 'react-redux';
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
