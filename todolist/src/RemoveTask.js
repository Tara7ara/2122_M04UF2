import React from 'react';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

class RemoveTask extends React.Component{

	constructor (props){
		super(props);
		this.state = { 
						open: false
					 };
	
		}

	handleOnClick = ()=>{
	this.setState({open: true });

}


	handleClose = () => {
	this.setState({open:false});
}

	handleDelete = () =>{
	this.props.removeTask(this.props.task_id);
	this.setState({open:false});

}


 render() {
 	return (
	<div>
		<Button variant="contained" 
				startIcon=<DeleteIcon /> 
				onClick={this.handleOnClick}>	

		BORRAR
		 
		</Button>

		<Dialog  
			open={this.state.open}
			onClose={this.handleClose}
			>
			<DialogTitle>
				{'Estas seguro de borrar?'}
					</DialogTitle>

			<DialogContent>
			</DialogContent>

			<DialogActions>
				<Button onClick={this.handleDelete}>
					BORRAR
						</Button>
				<Button onClick={this.handleClose}> 

					Salir
					</Button>

			</DialogActions>
		</Dialog>
</div>



);

}
}
export default RemoveTask;