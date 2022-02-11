import {SideBar} from './components/layaout/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Users} from './components/users/Users';
import {Tasks} from './components/tasks/Tasks';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SideBar />}>
					<Route path='/users' element={<Users />} />
					<Route path='/tasks' element={<Tasks />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
