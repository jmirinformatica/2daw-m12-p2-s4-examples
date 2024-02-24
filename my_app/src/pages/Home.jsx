import './Home.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import Layout from '../components/Layout'

export default function Home() {
	
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<section className="home">
				<Container className="text-center">
					<div>
						<a href="https://vitejs.dev" target="_blank">
							<img src={viteLogo} className="logo" alt="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank">
							<img src={reactLogo} className="logo react" alt="React logo" />
						</a>
					</div>
					<h1>Vite + React</h1>
					<div className="card w-75-md m-auto">
						<Button onClick={() => setCount((count) => count + 1)}>
							count is {count}
						</Button>
						<p>
							Edit <code>src/App.jsx</code> and save to test HMR
						</p>
					</div>
					<p className="read-the-docs">
						Click on the Vite and React logos to learn more
					</p>
				</Container>
			</section>
		</Layout>
	);
}
