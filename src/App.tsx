import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

function App() {


  return (
		<HashRouter>
			<div className="App">
				<Routes>
					{/*<Route path="" element={<ProtectedLayout/>}>*/}
						<Route index path="/" element={<IndexPage/>}/>
					{/*	<Route path="/table/:project/:transformation" element={<TableViewPage/>}/>*/}
					{/*</Route>*/}
					{/*<Route element={<PublicLayout/>}>*/}
					{/*	<Route path="/login" element={<LoginPage/>}/>*/}
					{/*</Route>*/}
				</Routes>
			</div>
		</HashRouter>

  );
}

export default App;
