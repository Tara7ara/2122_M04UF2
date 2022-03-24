import RmTask from './RmTask.js';

function Task (props)
{
	return (
		<li>{props.task} <RmTask /></li>
	);
}

export default Task;
