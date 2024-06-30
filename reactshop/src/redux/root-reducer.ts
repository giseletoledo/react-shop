import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";
import logger from "redux-logger";

export const rootReducer = combineReducers({
    userReducer: userReducer,

});
export type RootReducer = ReturnType<typeof rootReducer>;