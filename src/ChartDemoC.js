import React, { Component } from 'react';
import {
	initiateSocket,
	joinRoom,
	leaveRoom,
	subscribeToStream,
} from './socketFunctions';

const cbf = (msg) => {
	console.log('MSG: ', msg);
};

export class ChartDemoC extends Component {
	componentDidMount() {
		initiateSocket('chart');
		joinRoom('join', 'chart_room');
		subscribeToStream('chart_data', cbf);
	}

	componentWillUnmount() {
		leaveRoom('leave', 'chart_room');
	}
	render() {
    
		return <div>ChartDemoC</div>;
	}
}
