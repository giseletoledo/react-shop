import { createSlice } from "@reduxjs/toolkit";

interface User{
    name: string;
    email: string;
}

interface UserState{
    user: User | null;
}

const initialState: UserState = {
    user: null,
    /* user: {
        name: "Gisele",
        email: "gisele@email.com",
    } */
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        //primeira action: login
        login: (state, action) => {
            state.user = action.payload;
        },
        //segunda action: logout
        logout: (state, action) => {
            state.user = null;
        },
    }
});

export const { login, logout } = userSlice.actions