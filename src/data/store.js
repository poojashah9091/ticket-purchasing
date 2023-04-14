import { configureStore } from "@reduxjs/toolkit";
import billSliceReducer from "./billSlice";
import showsSliceReducer from "./showsSlice";

const store = configureStore({
    reducer:{
        shows: showsSliceReducer,
        bill: billSliceReducer
    }
});

export default store;