import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';

const Autocomplete: React.FC = () => {
    const { shows, loading } = useSelector((state: RootState) => state.show);

    if (loading) return <div>Loading</div>;

    return (
        <div className="autocomplete">
            {shows.map((show) => (
                <Link to={`/shows/${show.id}`} key={show.id}>
                    {show.name}
                </Link>
            ))}
        </div>
    );
};

export default Autocomplete;
