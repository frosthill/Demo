import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProtectedLayout from './pages/ProtectedLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import CapabilityMatrix from './pages/CapabilityMatrix';
import NetworkTopology from './pages/NetworkTopology';
import DeviceConfig from './pages/DeviceConfig';
import Asset from './pages/Asset';
import Reports from './pages/Reports';
import DataSources from './pages/DataSource';
import Forms from './pages/Forms';
import Configuration from './pages/Configuration';

function App() {


  return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="" element={<ProtectedLayout/>}>
						<Route index path="/" element={<HomePage/>}/>
						<Route index path="/dashboard" element={<Dashboard/>}/>
						<Route index path="/matrix" element={<CapabilityMatrix/>}/>
						<Route index path="/topology" element={<NetworkTopology/>}/>
						<Route index path="/device" element={<DeviceConfig/>}/>
						<Route index path="/asset" element={<Asset/>}/>
						<Route index path="/reports" element={<Reports/>}/>
						<Route index path="/data" element={<DataSources/>}/>
						<Route index path="/forms" element={<Forms/>}/>
						<Route index path="/configuration" element={<Configuration/>}/>
					{/*	<Route path="/table/:project/:transformation" element={<TableViewPage/>}/>*/}
					</Route>
					{/*<Route element={<PublicLayout/>}>*/}
					{/*	<Route path="/login" element={<LoginPage/>}/>*/}
					{/*</Route>*/}
				</Routes>
			</div>
		</HashRouter>

  );
}

export default App;
