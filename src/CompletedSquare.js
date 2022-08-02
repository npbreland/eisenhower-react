import { Task } from './Task.js';

export const CompletedSquare = ({tasks, moveTask}) => {
  return (
    <div className="square completed-square">
      <h2>COMPLETED</h2>
      {tasks.map((t, key) => (
          <Task 
            key={key}
            task={t}
            category="complete"
            moveTask={moveTask} />
      ))}
    </div>
  )

};
