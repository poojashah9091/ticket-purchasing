import { createSlice } from "@reduxjs/toolkit";
import movies from "../constants/movies.json";

const showsSlice = createSlice({
    name: "showsList",
    initialState: {
        allShowsList: [],
        status: "",
        error: ""
    },
    reducers: {
        getShowsList: (state)=>{
            state.allShowsList = movies;
            state.status = "success";
        }
    },
});

export default showsSlice.reducer;
export const {getShowsList} = showsSlice.actions;