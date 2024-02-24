import { Header } from './Header';
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main class="p-5">
				<Container>{children}</Container>
			</main>
		</>
	)
}

export default Layout;