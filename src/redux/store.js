import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";
const rootreducer = combineReducers({
    reducer:reducer,
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))