import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import createReducer from './reducers';
import middlewareStorage from './utils/apiMiddleware';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  let composeEnhancers = compose;

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, sagaMiddleware, middlewareStorage];

  // @ts-ignore
  const enhancer = [applyMiddleware(...middlewares)];

  // @ts-ignore
  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancer));
  // @ts-ignore
  store.runSaga = sagaMiddleware.run;
  // @ts-ignore
  store.injectedReducers = {}; // Reducer registry
  // @ts-ignore
  store.injectedSagas = {}; // Saga registry

  return store;
}
