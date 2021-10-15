export const TaskBanner = ({userName, taskItems}) => (
   <div className="w-3/4 container mx-auto">
      <div className="container mx-auto p-6 font-mono text-center bg-blue-500 mt-3 text-white w-full rounded-lg">
         <h4 className="text-2xl font-bold">
            {userName}'s Task App ({taskItems.filter(t => !t.done).length} Tareas por hacer)
         </h4>
      </div>
   </div>
)