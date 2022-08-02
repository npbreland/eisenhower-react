export const Task = ({
  task,
  category,
  removeTask,
  moveTask,
  completeTask
}) => {
  return (
    <div className="task">
      {task}
      {completeTask &&
      <button 
        className="complete-task-btn"
        onClick={() => completeTask(task, category)} >
        &#10003; 
      </button>
      }
      {removeTask &&
      <button 
        className="remove-task-btn"
        onClick={() => removeTask(task, category)} >
        X
      </button>
      }
      {category !== "do" && 
        <button 
          className="move-task-btn"
          onClick={() => moveTask(task, category, "do")} >
          Do
        </button>
      }
      {category !== "plan" && 
        <button 
          className="move-task-btn"
          onClick={() => moveTask(task, category,  "plan")} >
          Plan
        </button>
      }
      {category !== "delegate" && 
        <button 
          className="move-task-btn"
          onClick={() => moveTask(task, category, "delegate")} >
          Delegate
        </button>
      }
      {category !== "drop" && 
        <button 
          className="move-task-btn"
          onClick={() => moveTask(task, category, "drop")} >
          Drop
        </button>
      }
    </div>
  );
};
