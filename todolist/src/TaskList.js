import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: props.tasks
		};
	}

	render ()
	{
		let t = this.state.tasks;

		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<TaskItem task={t[i]} key={i} />);
		}

		return (
		<ul>
			{tasks}
		</ul>
		);
	}
}

export default TaskList;
