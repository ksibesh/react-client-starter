import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { apiReducer } from 'redux-api-http';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router: routerReducer,
    form: formReducer,
    api: apiReducer,
    ...asyncReducers,
  });
};

export default makeRootReducer;
