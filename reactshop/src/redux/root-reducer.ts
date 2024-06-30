import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    
})