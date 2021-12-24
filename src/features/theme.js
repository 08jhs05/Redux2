import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { color: "blue" };

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialStateValue,
        type: "string"
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    }
});

export const { changeColor } = themeSlice.actions

export default themeSlice.reducer;