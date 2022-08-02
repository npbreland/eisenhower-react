import { useState } from 'react';

export const NewTaskForm = ({addTask, category}) => {

  const [val, setVal] = useState('');

  const addTaskAndResetInput = e => {
    e.preventDefault();
    addTask(val.trim(), category);
    setVal('');
  };

  return (
    <form className="new-task-form">
      <input
        name="new-task-text"
        value={val}
        required
        onChange={e => setVal(e.target.value)}
      /> 
      <button className="new-task-btn" onClick={addTaskAndResetInput}>
        +
      </button>
    </form>
  )

};
