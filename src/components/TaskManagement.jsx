import React, { useState } from "react";
import initialTasks from "../data/Data";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
export default function TaskManagement() {
  const [tasks, setTasks] = useState(initialTasks);
  

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onChangeTask={handleChangeTask} />
    </>
  );
}
