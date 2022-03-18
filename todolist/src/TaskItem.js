import RemoveTask from './RemoveTask';

function TaskItem (props)
{
	return(
		<li>{props.task} <RemoveTask /></li>
	);

}

export default TaskItem;
