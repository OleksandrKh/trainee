import React, { Component } from 'react';

class RegistrationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleEmailChange = this.handleEmailChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('For is submited. Email value is', this.emailInputValue.value);
	}

	// handleEmailChange(event) {
	// 	console.log('email was changed', event.target.value);
	// 	this.setState({
	// 		email: event.target.value
	// 	})
	// }

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input
						type="text"
						placeholder="E-mail"
						ref={event => this.emailInputValue = event}
					/>
					<button>Save</button>
				</form>
			</div>
		)
	}
}

export default RegistrationForm;
