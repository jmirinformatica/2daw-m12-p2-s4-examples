import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import Logger from '../library/Logger'
import { useLocation, useNavigate } from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'

import AuthService from '../services/LocalStorage/AuthService'
import SessionService from '../services/SessionStorage/SessionService'

export function Header() {

	Logger.debug("Header component")
	const location = useLocation()
	const navigate = useNavigate()

	const { authToken, setAuthToken, user, setUser } = useUserContext()

	const handleLogout = (e) => {
		Logger.debug("User logout")
		// Auth 
		const authService = new AuthService()
		const success = authService.logout(authToken)
		if (success) {
			// Session
			const sessionService = new SessionService()
			sessionService.destroySession()
			// State
			setAuthToken(null)
			setUser(null)
			// Redirect
			navigate("/")
		} else {
			alert("Logout error... :-O")
		}
		e.preventDefault()
	}

	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">React + React Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">						
						<Nav activeKey={location.pathname}>
							<Nav.Link href="/" eventKey={"/"}>Home</Nav.Link>
							{user ? (
								<>
									<Nav.Link>{user.email}</Nav.Link>
									<Button variant="secondary" onClick={handleLogout}>Desconnectar</Button>
								</>
							) : (
								<>
									<Nav.Link href="/login" eventKey={"/login"}>Login</Nav.Link>
									<Nav.Link href="/register" eventKey={"/register"}>Register</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
