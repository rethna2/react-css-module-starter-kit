import React from 'react';
import styles from './mycomp.css';
import MyContentComp from './contentComp/MyContentComp';

export default class MyComp extends React.Component{

	render(){
		return (
				<div className = {styles.designOne}>
					<p> First Level Component </p>
					<MyContentComp />
				</div>
			)
	}
}