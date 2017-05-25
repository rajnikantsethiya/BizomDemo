import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducer/rootReducer';
import outlets from './components/outlets/outlets';
import orders from './components/orders/orders';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={hashHistory}>
      <Route path="/" component={outlets} />
      <Route path="/orders" component={orders} />
    </Router>
  </Provider>
  ), document.getElementById('app')
);
