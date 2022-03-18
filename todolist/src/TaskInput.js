import React from 'react';

class TaskInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});
	}

	render() {
		let l = this.state.value.length;

		return (
		<label htmlFor="task-input">Tarea 
		<input type="text" id="task-input" onChange={this.handleChange} value={this.state.value}/>
		</label>
		);
	}
}

export default TaskInput;
