import React from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { HomePage, PokemonPage, SearchPage} from './pages';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';




export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<HomePage />} />
						<Route path='pokemon/:id' element={<PokemonPage />} />
						<Route path='search' element={<SearchPage />} />
						<Route path="/login" element={<LoginPage />}/>
						<Route path='/registre' element={<UserPage/>}/>

					</Route>

					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</Router>


		
		
	);
};
