import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.open = !state.open;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
