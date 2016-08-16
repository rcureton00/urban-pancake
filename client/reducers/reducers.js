// Combines all of the reducers in order to pass them to the store

import { combineReducers } from 'redux';
import TruckReducer from './reducer_TruckList';
import TruckItemReducer from './reducer_TruckItem';
import TruckViewReducer from './reducer_TruckView';
import EventsReducer from './reducer_EventsList';

const rootReducer = combineReducers({
  trucks: TruckReducer,
  events: EventsReducer,
  yelpInfo: TruckViewReducer,
  currentTruck: TruckItemReducer,
});

export default rootReducer;
