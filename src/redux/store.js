import { createStore } from 'redux';

import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// added store to global object window
window.store = store;

export default store;
