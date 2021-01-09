import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './modules';
import logger from './middlewares/myLogger';

import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
