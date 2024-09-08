import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducer';
import { loadState, saveState } from './services/localStorage/lsRedux';


const lsSavedEvents = loadState('events');
let defaultState = {};
if (lsSavedEvents) {
  defaultState = {
    layout: {
      representation: {
        data: {
          events: lsSavedEvents
        }
      }
    }
  }
}

const enhancers = compose(
  applyMiddleware(reduxImmutableStateInvariant()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

store.subscribe(() => {
  saveState(store.getState().layout.representation.data.events);
})

export default store;
