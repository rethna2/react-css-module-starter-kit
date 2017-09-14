import React from 'react';
import styles from './mycontentcomp.css';

export default class MyContentComp extends React.Component{

	render(){
		return (
				<div className = {styles.designTwo}>
					<p> Second Level Component </p>
				</div>
			)
	}
}