import { combineReducers } from "redux";
//import { userReducer } from "./User/user-reducer";
//import { cartReducer } from "./Cart/cart-reducer";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "../components/Cart/cart-slice";

export const rootReducer = combineReducers({
    //userReducer: userReducer, //reducer com createStore
    userReducer: userSlice.reducer,//redux-toolkit
    cartReducer: cartSlice.reducer
});

export type RootReducer = ReturnType<typeof rootReducer>;