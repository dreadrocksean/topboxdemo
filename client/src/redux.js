import {
  combineReducers,
  createStore,
} from 'redux';

const initState = {lineColors: []};

// actions.js
export const setCurrLineColor = lineColor => ({
  type: 'SET_CURR_LINECOLOR',
  lineColor,
});

// reducers.js
export const lineColor = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CURR_LINECOLOR':
      const newState = Object.assign({}, state);
      newState.lineColors.push(action.lineColor);
      return newState;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  lineColor,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
