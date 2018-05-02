import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import createStore from './createStore';


// historyインスタンスの生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDOM.render(
  // StoreをAppコンポーネントに紐づけ
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
