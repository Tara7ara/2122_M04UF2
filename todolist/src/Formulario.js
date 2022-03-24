import Caja from './Caja.js';
import TaskSubmit from './TaskSubmit.js';
import Lista from './Lista.js';

function Formulario ()
{
	return (
		<form>
			<Caja />
			<TaskSubmit />
			<Lista />
		</form>
	);

}

export default Formulario;
