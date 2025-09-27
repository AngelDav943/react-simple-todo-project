import { useState } from 'react'
import './App.css'
import Tarea from './components/Tarea';

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  const estado = useState();

  function inputKeyDown(event) {
    if (event.keyCode == 13) agregarTarea()
  }

  function agregarTarea() {
    setTareas([...tareas, texto])
    localStorage.setItem("tareas", JSON.stringify([...tareas, texto]))
    setTexto("")
  }

  function actualizarTexto(event) {
    setTexto(event.target.value)
  }

  function eliminarTarea(index) {
    setTareas(tareas => {
      let nuevaTareas = [...tareas]
      nuevaTareas.splice(index, 1);
      localStorage.setItem("tareas", JSON.stringify(nuevaTareas))
      return nuevaTareas;
    })
  }

  useEffect(() => {
    const tareasStorage = localStorage.getItem("tareas")
    if (tareasStorage) {
      setTareas(
        JSON.stringify(tareasStorage)
      )
    }
  }, [])

  return (
    <main>
      <div className='inputs'>
        <input
          className='texto'
          type="text"
          onKeyDown={inputKeyDown}
          onChange={actualizarTexto}
          value={texto}
        />
        <button
          onClick={agregarTarea}>Agregar</button>
      </div>
      {tareas.map((tarea, index) => {
        return (
          <Tarea key={index} tarea={tarea} eliminarTarea={eliminarTarea} index={index} />
        )
      })}
    </main>
  )
}

export default App
