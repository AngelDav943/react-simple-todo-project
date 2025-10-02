import React from 'react'

function Tarea({ tarea, index, completada = false, cambioCompletada, eliminarTarea }) {
	return (
		<div className='tarea'>
			<input type="checkbox" defaultChecked={completada} onChange={e => cambioCompletada(index, e)} />
			<p>{tarea}</p>
			<button onClick={() => eliminarTarea(index)} >+</button>
		</div>
	)
}

export default Tarea