export const Task = () => {
  return (
    <li className="task-item">
      <div className="task-controls">
        <input type="checkbox" />
        <button type="button" className="btn-delete">
          ×
        </button>
      </div>
      <div className="task-details">
        <div className="title">Sample Task</div>
        <div className="description">This is a sample description.</div>
        <div className="task-tags">
          <span className="tag priority-high">High</span>
          <span className="tag group-work">Work</span>
        </div>
      </div>
    </li>
  );
};
