import React from 'react';
//import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			tasks_id:[]
		};
	}

	componentWillMount(){
		fetch("http://10.40.1.0:3030/")
			.then(response => response.json())
			.then(data => this.setTasks(data));
	}

	setTasks = data => {
		console.log(data);
		for (let i = 0; i < data.length; i++)
		this.state.tasks.push(data[i].task);
		this.state.tasks_id.push(data[i]._id);
		}

		addTask = task =>{	
		fetch("http://10.40.1.0:3030", {
			method:"POST",
			body: '{"tasks":"' +task+'", "remove":"false"}'
		})
	 	.then(response => response.json() )
     		.then(data => {let id = data[0]["_id"]

			this.state.tasks.push(task);
			this.state.tasks_id.push(id);

			this.setState({	tasks: this.state.tasks	});	
		});

	}


	removeTask = (task,  key, id_task) => {
		this.state.tasks.splice(key, 1);
		this.setState({
			tasks: this.state.tasks
		});
		fetch("http://10.40.1.0:3030/", {
			method:"POST",
			body: '{"task_id":"'+id_task+'", "remove":"true"}'
		});
	}


	render(){
		return (
<div className="App">
<Title />
<fieldset>
<Formulario addTask={this.addTask} />
<Lista tasks={this.state.tasks} tasks_id={this.state.tasks_id} removeTask={this.removeTask} />
</fieldset>
</div>
		);
  }
}

export default App;
