import { Container, Nav, Navbar } from 'react-bootstrap';
import Logger from '../library/Logger';
import { useLocation } from 'react-router-dom';

export function Header({user}) {
	
	Logger.debug("Header component")
	const location = useLocation()
	
	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">React + React Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">						
						<Nav activeKey={location.pathname}>
							<Nav.Link href="/" eventKey={"/"}>Home</Nav.Link>
							<Nav.Link href="/login" eventKey={"/login"}>Login</Nav.Link>
							<Nav.Link href="/register" eventKey={"/register"}>Register</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
