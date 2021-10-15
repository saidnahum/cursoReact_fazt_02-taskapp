import { useState } from "react/cjs/react.development"

export const TaskCreator = ({callback}) => {

   const [newTaskName, setNewTaskName] = useState('');

   const updateNewTaskName = (e) => setNewTaskName(e.target.value);

   const createNewTask = () => {
      callback(newTaskName);
      setNewTaskName('');
   }

   return(
      <div className="my-5 container mx-auto w-3/4 flex">
         <input
            type="text"
            value={newTaskName}
            onChange={updateNewTaskName}
            className="input border border-gray-400 rounded w-full px-3 py-3  focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            placeholder="Nombre de la tarea"
         />

         <button onClick={createNewTask} className="p-2 bg-green-500 rounded-lg ml-5 text-white font-bold">
            Agregar
         </button>
      </div>
   )
}