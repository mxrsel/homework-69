import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store.ts";
import axios from "axios";

export interface Show{
    id: string;
    name: string;
    description: string;
    image: string;
}

export interface ShowState {
    show: Show[];
    Details: Show | null;
    loading: boolean;
    error: string | null;
}

const initialState: ShowState = {
    show: [],
    Details: null,
    loading: false,
    error: null,
};

const fetchShow = createAsyncThunk<Show[], string, { state: RootState }>(
    'shows/fetchShows',
    async (message: string) => {
        const response = await axios.get<{ show: Show }[]>(`http://api.tvmaze.com/search/shows?q=${message}`);
        return response.data.map(result => result.show);
    }
);

export const fetchDetails = createAsyncThunk<Show, number, { state: RootState }>(
    'shows/fetchShowDetails',
    async (id: number) => {
        const response = await axios.get<Show>(`http://api.tvmaze.com/shows/${id}`);
        return response.data;
    }
);

const ShowSlice = createSlice({
    name: "show",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShow.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShow.fulfilled, (state, action: PayloadAction<Show[]>) => {
                state.loading = false;
                state.show = action.payload;
            })
            .addCase(fetchShow.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed';
            })
            .addCase(fetchDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch show details';
            });

    },
})

export const showReducer = ShowSlice.reducer;