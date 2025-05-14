export const Task = ({ task }) => {
  return (
    <li className="task-item">
      <div className="task-controls">
        <input type="checkbox" />
        <button type="button" className="btn-delete">
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
