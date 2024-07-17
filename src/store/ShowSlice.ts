import {createSlice} from "@reduxjs/toolkit";

interface Show{
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface ShowState {
    shows: Show[];
    loading: boolean;
    error: string | null;
}

const initialState: ShowState = {
    shows: [],
    loading: false,
    error: null,
};

const ShowSlice = createSlice({
    name: "show",
    initialState,
    reducers: {}
})