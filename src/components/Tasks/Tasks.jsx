import { Task } from "./Task";
export const Tasks = ({ tasks, onToggleDone, handleDeleteTask }) => {
  return (
    <section>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.title}
            onToggleDone={onToggleDone}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
        {/* Repeat .task-item as needed */}
      </ul>
    </section>
  );
};
