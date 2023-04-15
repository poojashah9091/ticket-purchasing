import { configureStore } from "@reduxjs/toolkit";
import billSliceReducer from "./billSlice";
import showsSliceReducer from "./showsSlice";
import userSliceReducer from "./userSlice";

const store = configureStore({
    reducer:{
        shows: showsSliceReducer,
        bill: billSliceReducer,
        user: userSliceReducer
    }
});

export default store;