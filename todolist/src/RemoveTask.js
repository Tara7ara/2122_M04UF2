import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import React from 'react';

class RemoveTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	
	openDialog = () => {
		this.setState({open: true });
	}

	closeDialog = () => {
		this.setState({open: false});
	}

	removeTask = () => {
		this.props.removeTask(this.props.task,this.props.order, this.props.task_id);
		this.closeDialog();
	}
	
	render() {
		return (
			<div>
				<Button color="error" variant="contained" 
					endIcon=<DeleteIcon /> 
					onClick={this.openDialog}>Eliminar
				</Button>

				<Dialog	open={this.state.open} onClose={this.closeDialog}>
					<DialogTitle>{'Estas seguro de BORRAR'}</DialogTitle>

					<DialogActions>
						<Button onClick={this.removeTask}>
							Borrar
						</Button>
						<Button onClick={this.closeDialog}>
							NO borrar
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default RemoveTask;