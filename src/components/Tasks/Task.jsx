export const Task = ({ task, onToggleDone, handleDeleteTask }) => {
  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
      <div className="task-controls">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => onToggleDone(task.id, e.target.checked)}
        />
        <button
          type="button"
          className="btn-delete"
          onClick={() => handleDeleteTask(task.id)}
        >
          ×
        </button>
      </div>
      <div className="task-details">
        <div className="title">{task.title}</div>
        <div className="description">{task.description}</div>
        <div className="task-tags">
          <span className="tag priority-high">{task.priority}</span>
          <span className="tag group-work">{task.group}</span>
        </div>
      </div>
    </li>
  );
};
