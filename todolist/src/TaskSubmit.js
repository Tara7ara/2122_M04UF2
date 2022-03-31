//import Button from '@mui/material/Button';
//
//function TaskSubmit ()
//{
//	return (
//		<Button variant="contained">Añadir</Button>
//	);
//
//}
//
//export default TaskSubmit;

import Icon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

class  TaskSubmit extends React.Component {
	constructor (props) {
		super(props);
		this.state ={

		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(event);
	}

	render() {
		return (
			<Tooltip title="Add" >
				<Button variant="contained" size="large" color="success" onClick={this.handleSubmit}>					<Icon/>
				</Button>
			</Tooltip>
		);
	}
}
export default TaskSubmit;
