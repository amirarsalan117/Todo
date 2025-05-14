import { Task } from "./Task";
export const Tasks = () => {
  return (
    <section>
      <ul className="task-list">
        <Task />
        {/* Repeat .task-item as needed */}
      </ul>
    </section>
  );
};
