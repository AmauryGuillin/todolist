import { useState } from "react";
import Input from "../input";
import Title from "../title";
import "./App.css";
import TasksList from "../tasks-list";
import "../tasks-list/taskList.css";
import "../title/title.css";
import "../input/input.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function deleteTask(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="content">
        <div className="container">
          <Title id="title" className="title" title={"todos"}></Title>
          <Input
            className="input-task"
            placeholder="What needs to be done?"
            addTask={addTask}
          />
          <TasksList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;
