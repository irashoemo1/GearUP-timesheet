import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    employee: null,
    token: null,
    timesheets: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.employee = action.payload.employee;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.employee = null;
            state.token = null;
        },
        setTimesheets: (state, action) => {
            state.timesheets = action.payload.timesheets;
        },
    }
})

export const {setMode, setLogin, setLogout, setTimesheets} = authSlice.actions;
export default authSlice.reducer;