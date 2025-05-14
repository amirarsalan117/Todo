import { Task } from "./Task";
export const Tasks = ({ tasks }) => {
  return (
    <section>
      <ul className="task-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
        {/* Repeat .task-item as needed */}
      </ul>
    </section>
  );
};
