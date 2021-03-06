import React, { Component } from 'react';

import Menu from './Menu.js';
import RegistrationForm from './RegistrationForm.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Menu />
				<RegistrationForm />
			</div>
		)
	}
}

export default App;
