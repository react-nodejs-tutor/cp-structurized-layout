import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
	render() {
		return (
			<div className="Item">
				<div className="check">&#10004;</div>
				<div className="remove">REMOVE</div>
				<div className="text">TITLE</div>
			</div>
		);
	}
}

export default Item;
