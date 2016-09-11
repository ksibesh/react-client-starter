import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk  from 'redux-thunk';
import makeRootReducer from './reducers';

export default (initialState = {}, history) => {
  let middleware;
  if(__PROD__) {
    middleware = compose(
  		applyMiddleware( thunk, routerMiddleware(history) )
  	);
  } else {
    middleware = compose(
  		applyMiddleware( thunk, routerMiddleware(history) ),
  		window.devToolsExtension ? window.devToolsExtension() : f => f
  	);
  }

	const store = createStore(
		makeRootReducer(),
		initialState,
		middleware
	);

	store.asyncReducers = {};

	return store;
}
