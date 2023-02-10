import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


const ProtectedLayout = () => {
	// if (!localStorage.getItem('user')) {
	// 	return <Navigate to={{pathname: '/login'}}/>;
	// }
	return (
		<>
			<header>
				{/*https://getbootstrap.com/docs/4.1/components/navbar/*/}
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand href='#/'>
							<img src={process.env.PUBLIC_URL + '/fh_logo.svg'} alt='FrostHill' style={{ height: '90px' }} />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link href='/'>Home</Nav.Link>
								<Nav.Link href='#/ddd'>Wiki</Nav.Link>
								<Nav.Link href='#/login'>Logout</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

			</header>

			<Outlet />

			<footer>
			</footer>
		</>
	);
};

export default ProtectedLayout;
