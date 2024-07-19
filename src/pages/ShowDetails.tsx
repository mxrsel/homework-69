import React from 'react';
import SearchInput from "../components/SearchInput.tsx";
import Details from "../store/Details.tsx";


const ShowPage: React.FC = () => {
    return (
        <div>
            <SearchInput />
            <Details />
        </div>
    );
};

export default ShowPage;
