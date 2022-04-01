import React from 'react';
//import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: []
		};
		console.log("Entrando");

	}


	componentDidMount = () =>{
		console.log("a");
		fetch("http://10.40.2.31:3030/")
			.then(response => response.json())
			.then(data => this.setTasks(data));
	}

	setTasks = data => {
		let tasks = [];
		for (let i = 0; i < data.length; i++)
			tasks.push(data[i].task);

		console.log(tasks);
		this.state.tasks = tasks;
		this.setState({
			tasks: this.state.tasks
		});
	};

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});
	}


	removeTask = id_task => {
		this.state.tasks.splice(id_task, 1);
		this.setState({
			tasks: this.state.tasks
		});
	}


	render(){
		return (
<div className="App">
<Title />
<TaskForm addTask={this.addTask} />
<TaskList tasks={this.state.tasks} removeTask={this.removeTask}/>
</div>
		);
  }
}

export default App;
