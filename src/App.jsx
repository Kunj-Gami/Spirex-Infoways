import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ceo from './pages/Ceo';
import Coo from './pages/Coo';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ceo" element={<Ceo />} />
            <Route path="/coo" element={<Coo />} />
        </Routes>
    );
}

export default App;
