import { useState, useEffect } from "react";
import "./App.css";
import Tarea from "./components/Tarea";

function App() {
	const [texto, setTexto] = useState("");
	const [tareas, setTareas] = useState([]);

	function inputKeyDown(event) {
		if (event.keyCode == 13) agregarTarea();
	}

	function agregarTarea() {
		const nuevaTarea = {
			completada: false,
			texto: texto,
		}
		setTareas([...tareas, nuevaTarea]);
		localStorage.setItem("tareas", JSON.stringify([...tareas, nuevaTarea]));
		setTexto("");
	}

	function actualizarTexto(event) {
		setTexto(event.target.value);
	}

	function eliminarTarea(index) {
		setTareas((tareas) => {
			let nuevaTareas = [...tareas];
			nuevaTareas.splice(index, 1);
			localStorage.setItem("tareas", JSON.stringify(nuevaTareas));
			return nuevaTareas;
		});
	}


	function cambioCompletada(index, event) {
		setTareas((tareas) => {
			let tareasActualizadas = [...tareas];
			console.log("evento", event.target.value)
			tareasActualizadas[index] = {
				...tareasActualizadas[index],
				completada: event.target.value == "on"
			}
			localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
			return tareasActualizadas;
		});
	}

	useEffect(() => {
		const tareasStorage = localStorage.getItem("tareas");
		if (tareasStorage) {
			setTareas(JSON.parse(tareasStorage));
		}
	}, []);

	return (
		<main>
			<div className="inputs">
				<input
					className="texto"
					type="text"
					onKeyDown={inputKeyDown}
					onChange={actualizarTexto}
					value={texto}
				/>
				<button onClick={agregarTarea}>Agregar</button>
			</div>
			{tareas && tareas.map((tarea, index) => {
				return (
					<Tarea
						key={index}
						tarea={tarea.texto}
						completada={tarea.completada}
						cambioCompletada={cambioCompletada}
						eliminarTarea={eliminarTarea}
						index={index}
					/>
				);
			})}
		</main>
	);
}

export default App;
