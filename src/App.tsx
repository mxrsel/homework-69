import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home.tsx";
import ShowPage from "./pages/ShowDetails.tsx";
import Toolbar from "./components/Toolbar.tsx";
import './App.css'

const App: React.FC = () => {
    return (
        <>
        <div>
            <Toolbar />
        </div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shows/:id" element={<ShowPage />} />
        </Routes>
        </>
    );
};

export default App;
