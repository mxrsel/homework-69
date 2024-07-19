import React from 'react';
import Show from "../store/Show.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>TV Shows Search</h1>
            <Show />
        </div>
    );
};

export default HomePage;
