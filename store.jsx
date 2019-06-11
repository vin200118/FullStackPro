import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import userReducer from "./view/reducer/userReducer.jsx"

export default createStore(
combineReducers({
    user:userReducer
}),      
{},
applyMiddleware(createLogger())
);
