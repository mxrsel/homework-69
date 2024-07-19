import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import {fetchShow} from "../store/ShowSlice.ts";

const SearchInput: React.FC = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        if (event.target.value) {
            dispatch(fetchShow(event.target.value));
        }
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for TV shows"
        />
    );
};

export default SearchInput;
