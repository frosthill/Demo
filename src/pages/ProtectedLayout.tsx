import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	DatabaseUp,
	Diagram3,
	FileText,
	Gear,
	HddNetwork,
	House,
	ListTask,
	ShieldCheck,
	Speedometer2,
	Table
} from 'react-bootstrap-icons';


const ProtectedLayout = () => {
	// if (!localStorage.getItem('user')) {
	// 	return <Navigate to={{pathname: '/login'}}/>;
	// }
	return (
		<>
			<div className='container-fluid'>
				<div className='row flex-nowrap'>
					<div className='col-auto col-md-4 px-1 bg-white nav'>
						<div className='d-flex flex-column px-3 pt-2 min-vh-100'>
							<a href='/' className='pb-3 mb-md-0 me-md-auto'>
								<img className='d-sm-block d-none' src={process.env.PUBLIC_URL + '/fh_logo.svg'} alt='FrostHill'
										 style={{ height: '90px', margin: 'auto' }} />
								<img className='d-sm-none d-block' src={process.env.PUBLIC_URL + '/fh_logo.svg'} alt='FrostHill'
										 style={{ height: '12px', margin: '0' }} />
							</a>
							<ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start '>
								<li className='nav-item'>
									<a href='#' className='nav-link px-0'>
										<House /> <span className='ms-1 d-none d-sm-inline'>Home</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/dashboard' className='nav-link px-0'>
										<Speedometer2 /> <span className='ms-1 d-none d-sm-inline'>Dashboard</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/matrix' className='nav-link px-0'>
										<Table /> <span className='d-none d-sm-inline'>Capability matrix</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/topology' className='nav-link px-0'>
										<Diagram3 /> <span className='d-none d-sm-inline'>Network topology</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/device' className='nav-link px-0'>
										<HddNetwork /> <span className='d-none d-sm-inline'>Device config</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/asset' className='nav-link px-0'>
										<ShieldCheck /> <span className='d-none d-sm-inline'>Asset [Posture]</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/reports' className='nav-link px-0'>
										<FileText /> <span className='d-none d-sm-inline'>Reports</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/data' className='nav-link px-0'>
										<DatabaseUp /> <span className='d-none d-sm-inline'>Data Source</span>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/forms' className='nav-link px-0'>
										<ListTask /> <span className='d-none d-sm-inline'>Forms</span>
									</a>
								</li>
							</ul>
							<hr style={{ borderTop: '1px dashed #0083B2' }} />
							<ul className='nav nav-pills flex-column mb-4 align-items-start align-items-sm-start '>
								<li className='nav-item'>
									<a href='#/configuration' className='nav-link px-0'>
										<Gear /> <span className='d-none d-sm-inline'>Configuration</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col py-3 w-100'>
						<Outlet />
					</div>
				</div>
			</div>
		</>

	);
};
export default ProtectedLayout;
