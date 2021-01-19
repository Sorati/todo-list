import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import tasksReducer from './store/reducer'
import { save } from "redux-localstorage-simple"

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    tasksReducer,
    composeEnhancer(
        applyMiddleware(
            save({namespace: 'todo-list'})
        ),
    ),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
