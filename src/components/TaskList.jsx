import Task from "./Task";

export default function TaskList({ tasks,onDeleteTask,onChangeTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onChangeTask={onChangeTask} />
        ))}
      </ul>
    </>
  );
}
