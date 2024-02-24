import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import Layout from '../../components/Layout';
import Logger from '../../library/Logger';

export default function Register() {

	const [data, setData] = useState("");

	function onSubmit(e) {
		Logger.debug("Register form submitted");
		Logger.debug(data);
		e.preventDefault();
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
	);
}