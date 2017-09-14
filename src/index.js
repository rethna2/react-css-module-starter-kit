import React from 'react';
import {render} from 'react-dom';
import styles from './app.css';

import MyComp from './comp/MyComp';

let Comp = () => (
	<div className = {styles.rootDiv}>
		<p> Root Component</p>
		<MyComp />
	</div>
	)

render(
	<Comp />, 
	document.getElementById('root')
	)