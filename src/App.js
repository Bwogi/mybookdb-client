import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books/Books';
import Add from './pages/Add/Add';
import Update from './pages/Update/Update';
import Students from './pages/Students/Students';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Books />} />
					<Route path='/add' element={<Add />} />
					<Route path='/update' element={<Update />} />
					<Route path='/students' element={<Students />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
