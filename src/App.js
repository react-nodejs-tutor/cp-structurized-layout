import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3>TODO LIST</h3>
				<Form />
				<List />
			</div>
		);
	}
}

export default App;
