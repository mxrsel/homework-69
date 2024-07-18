import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../app/store.ts";
import {fetchDetails} from "./ShowSlice.ts";

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { Details, loading, error } = useSelector((state: RootState) => state.show);

    useEffect(() => {
        dispatch(fetchDetails(Number(id)));
    }, [dispatch, id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            {Details && (
                <>
                    <h1>{Details.name}</h1>
                    {Details.image && <img src={Details.image} alt={Details.name} />}
                    <p>{Details.description}</p>
                </>
            )}
        </div>
    );
};

export default Details;