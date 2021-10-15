const TaskRow = props => (

   <tr key={props.task.name} className="text-gray-700">
      <td className="px-4 py-3 border"> {props.task.name} </td>
      <td className="px-4 py-3 text-ms font-semibold border">
         <input 
            type="checkbox" 
            checked={props.task.done} 
            onChange={() => props.toggleTask(props.task)}
         />
      </td>
   </tr>

);

export default TaskRow;