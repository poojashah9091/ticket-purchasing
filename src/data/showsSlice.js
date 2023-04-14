import { createSlice } from "@reduxjs/toolkit";
import movies from "../constants/movies.json";

const showsSlice = createSlice({
    name: "showsList",
    initialState: {
        allShowsList: []
    },
    reducers: {
        getShowsList: (state)=>{
            state.allShowsList = movies;
        }
    },
});

export default showsSlice.reducer;
export const {getShowsList} = showsSlice.actions;