import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<form className="form_container">
					<input placeholder="something to do?" />
					<button>추가</button>
				</form>
			</div>
		);
	}
}

export default Form;
