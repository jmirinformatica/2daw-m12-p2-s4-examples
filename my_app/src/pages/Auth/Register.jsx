import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import Logger from '../../library/Logger'

import AuthService from '../../services/LocalStorage/AuthService'

export default function Register() {

	const [data, setData] = useState("")
	const navigate = useNavigate()

	function onSubmit(e) {
		Logger.debug("Register form submitted")
		Logger.debug(data)
		// Auth 
		const authService = new AuthService()
		const success = authService.register(data.username, data.email, data.password)
		if (success) {
			// Redirect
			navigate("/login")
			alert("Register OK!")
		} else {
			alert("Register error... :_(")
		}
		e.preventDefault()
	}

	function onInput(e) {
		let value =  e.currentTarget.value
		if (e.currentTarget.type == 'checkbox') {
			// Boolean
			value = (value == 'on')
		}
		let formData = {}
		formData[e.currentTarget.name] = value 
		setData({
			...data,
			...formData
		})
	}

	return (
		<Layout>
			<section id="register" className=" w-75 m-auto">
				<h2>Sign up</h2>
				<Form onSubmit={onSubmit}>
					<Form.Group className="mb-3" controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" placeholder="Enter username" onInput={onInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" name="email" placeholder="Enter email" onInput={onInput} />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="Enter password" onInput={onInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formCheckbox">
						<Form.Check type="checkbox" name="accept" label="I accept privacy policy and terms" onInput={onInput} />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form> 
			</section>
		</Layout>
	)
}