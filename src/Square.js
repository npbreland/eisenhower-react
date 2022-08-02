import { Task } from './Task.js';
import { NewTaskForm } from './NewTaskForm.js';

export const Square = ({
  category,
  tasks,
  addTask,
  removeTask,
  moveTask,
  completeTask
}) => {
  return (
    <div className="square">
      <h2>{category.toUpperCase()}</h2>
      {tasks.map((t, key) => (
        <Task 
          key={key}
          task={t}
          category={category}
          removeTask={removeTask}
          moveTask={moveTask}
          completeTask={completeTask} />
      ))}
      <NewTaskForm addTask={addTask} category={category} />
    </div>
  );
};
