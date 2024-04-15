import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Navigation} from './Components/Navigation';
import {HomePage} from './Page/HomePage'
import {PokemonPage} from  './Page/PokemonPage';
/*import SearchPage from './Page/SearchPage';
SearchPage*/

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<HomePage />} />
                <Route path="pokemon/:id" element={<PokemonPage />} />
                
            </Route>
            <Route path="*" element={<Navigation to="/" />} />
        </Routes>
    );
}


