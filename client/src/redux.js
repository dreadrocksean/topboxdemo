import {
  combineReducers,
  createStore,
} from 'redux';

const initState = {
  lineColors: [],
  channels:[],
};

// processors
const processChannels = references => {
  references = [
    {id:2, references:[5,6]},
    {id:5, references:[2]},
    {id:3, references:[7,2]},
  ];
  const channels = references.reduce((sum, ref) => {
    ref.references.forEach(item => {
      const found = sum.find(channel => (
        channel.indexOf(ref.id) > -1 ||
        channel.indexOf(item) > -1
      ));
      if (!found) {
        sum.push([ref.id, item]);
      } else if(found.indexOf(item) === -1) {
        found.push(item);
      } else if(found.indexOf(ref.id) === -1) {
        found.push(ref.id);
      }
    });
    return sum;
  }, []);
  return channels;
};

const processLineColors = lineColors => {
  const colors = lineColors.map( lc => lc.lineColor );
  return lineColors.map((lc, i) => {
    if (i === 0) { return lc; }
    if (colors[i]) { return lc; }
    colors[i] = colors[i-1];
    return { ...lc, lineColor: colors[i] };
  });
};

// actions.js
export const setReferences = references => ({
  type: 'SET_REFERENCES',
  references,
});
export const setLineColors = lineColors => ({
  type: 'SET_LINECOLORS',
  lineColors,
});

// reducers.js
export const lineColors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LINECOLORS':
      const lineColors = processLineColors(action.lineColors);
      return lineColors;
    default:
      return state;
  }
};
export const channels = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REFERENCES':
      const channels = processChannels(action.references);
      return channels;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  lineColors, channels,
});

// store.js
export const configureStore = (initialState = {}) => (
  createStore(reducers, initialState)
);

// const mainReducer = (state = {}, action) => {
//   return {
//     lineColors: lineColor(state.lineColors, action),
//     channels: channels(state.channels, action)
//   };
// };
// export const store = createStore(mainReducer);
export const store = configureStore();
