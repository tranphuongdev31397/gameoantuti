import { combineReducers, createStore } from "redux";
import oanTuTiReducer from './reducers/oanTuTiReducer'
import bookingRoomReducer from './reducers/bookingRoomReducer'
const rootReducer = combineReducers({
    oanTuTiReducer,
    bookingRoomReducer,
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store