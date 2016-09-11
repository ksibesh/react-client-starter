import createStore from './create-store';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { makeRootReducer } from './reducers';

const initialState = window.__INITIAL_STATE__;

export const store = createStore(initialState, hashHistory);
export const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: (state) => state.router,
});

export const injectReducer = (reducerList) => {
  for (const key in reducerList) {
    if (key !== null) {
      store.asyncReducers[key] = reducerList[key];
    }
  }
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};
