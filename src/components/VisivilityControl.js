export const VisibilityControl = (props) => {
   return (
      <div>
         <input 
            type="checkbox" 
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)}
         />
         <label className="ml-3">
            Mostrar {props.description}
         </label>
      </div>
   )
}