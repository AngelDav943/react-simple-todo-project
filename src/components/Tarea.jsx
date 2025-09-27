import React from 'react'

function Tarea({ tarea, index, eliminarTarea }) {
	return (
		<div className='tarea'>
			<input type="checkbox" />
			<p>{tarea}</p>
			<button onClick={() => eliminarTarea(index)} >+</button>
		</div>
	)
}

export default Tarea