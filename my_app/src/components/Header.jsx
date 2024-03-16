import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import Logger from '../library/Logger'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'

export function Header() {

	Logger.debug("Header component")
	const location = useLocation()
	const navigate = useNavigate()

	const { user, setUser } = useUserContext()

	const handleLogout = () => {
		Logger.debug("User logout")
		setUser(null)
		navigate("/")
	}

	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">React + React Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">						
						<Nav activeKey={location.pathname}>
							<Nav.Link as={Link} to="/" eventKey={"/"}>Home</Nav.Link>
							{user ? (
								<>
									<Nav.Link>{user.email}</Nav.Link>
									<Button variant="secondary" onClick={handleLogout}>Desconnectar</Button>
								</>
							) : (
								<>
									<Nav.Link as={Link} to="/login" eventKey={"/login"}>Login</Nav.Link>
									<Nav.Link as={Link} to="/register" eventKey={"/register"}>Register</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}
