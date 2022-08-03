import './App.css';
import { useState, useEffect } from 'react';
import { Square } from './Square.js';
import { CompletedSquare } from './CompletedSquare.js';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [doTasks, setDoTasks] = useState([]);
  const [planTasks, setPlanTasks] = useState([]);
  const [delegateTasks, setDelegateTasks] = useState([]);
  const [dropTasks, setDropTasks] = useState([]);

  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const removeTaskWithConfirm = (task, category) => {
    if (!window.confirm(`Are you sure you want to delete task "${task}"?`)) {
      return;
    }
    removeTask(task, category);
  };

  const removeTask = (task, category) => {
    const isNotSameTask = t => t !== task;

    switch (category) {
      case "do":
        setDoTasks([...doTasks].filter(isNotSameTask));
        break;
      case "plan":
        setPlanTasks([...planTasks].filter(isNotSameTask));
        break;
      case "delegate":
        setDelegateTasks([...delegateTasks].filter(isNotSameTask));
        break;
      case "drop":
        setDropTasks([...dropTasks].filter(isNotSameTask));
        break;
      case "complete":
        setCompletedTasks([...completedTasks].filter(isNotSameTask));
        break;
      default:
        break;
    }
  };

  const addTask = (task, category) => {
    switch (category) {
      case "do":
        setDoTasks([...doTasks, task]);
        break;
      case "plan":
        setPlanTasks([...planTasks, task]);
        break;
      case "delegate":
        setDelegateTasks([...delegateTasks, task]);
        break;
      case "drop":
        setDropTasks([...dropTasks, task]);
        break;
      default:
        break;
    }
  };

  const completeTask = (task, category) => {
    removeTask(task, category);
    setCompletedTasks([...completedTasks, task]);
  };

  const moveTask = (task, prevCategory, nextCategory) => {
    removeTask(task, prevCategory);
    addTask(task, nextCategory);
  };

  useEffect(() => {
    // TODO: update DB with new values.
  }, [doTasks, planTasks, delegateTasks, dropTasks, completedTasks]);

  return (
    <div className={ isDarkMode ? 'App dark' : 'App' } >
      <header className="App-header">
        Eisenhower To-Do
        <button 
          onClick={toggleDarkMode}>
          { isDarkMode ? 'Light' : 'Dark' }
        </button>
      </header>
      <div className="squares-container">
        <Square 
          category="do"
          tasks={doTasks} 
          addTask={addTask}
          removeTask={removeTaskWithConfirm}
          moveTask={moveTask}
          completeTask={completeTask} />
        <Square 
          category="plan"
          tasks={planTasks} 
          addTask={addTask}
          removeTask={removeTaskWithConfirm}
          moveTask={moveTask}
          completeTask={completeTask} />
      </div>
      <div className="squares-container">
        <Square 
          category="delegate"
          tasks={delegateTasks} 
          addTask={addTask}
          removeTask={removeTaskWithConfirm}
          moveTask={moveTask}
          completeTask={completeTask} />
        <Square 
          category="drop"
          tasks={dropTasks} 
          addTask={addTask}
          removeTask={removeTaskWithConfirm}
          moveTask={moveTask}
          completeTask={completeTask} />
      </div>
      <div className="squares-container">
        <CompletedSquare
          tasks={completedTasks} 
          moveTask={moveTask}
        />
      </div>
    </div>
  );
}

export default App;
