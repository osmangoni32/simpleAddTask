import React, { useState } from "react";
import initialTasks from "../data/Data";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
export default function TaskManagement() {
  const [tasks, setTasks] = useState(initialTasks);
  const nextId = (data) => {
    const maxid = data.reduce(
      (prev, current) =>
        (prev && prev.id) > current.id ? prev.id : current.id,
      null
    );
    return maxid ? maxid + 1 : 1;
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    return setTasks(nextTasks);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </>
  );
}
