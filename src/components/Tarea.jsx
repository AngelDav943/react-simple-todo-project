import React from 'react'

function Tarea(props) {
	return (
		<div className='tarea'>
			<input type="checkbox" />
			<p>{props.tarea}</p>
			<button onClick={() => props.eliminarTarea(props.index)} >+</button>
		</div>
	)
}

export default Tarea