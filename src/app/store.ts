import {configureStore} from "@reduxjs/toolkit";
import {showReducer} from "../store/ShowSlice.ts";

const store = configureStore({
    reducer: {
        show: showReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;