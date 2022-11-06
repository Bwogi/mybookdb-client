import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/add';
import Update from './pages/update';
import Books from './pages/books';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Books />} />
					<Route path='/add' element={<Add />} />
					<Route path='/update' element={<Update />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
