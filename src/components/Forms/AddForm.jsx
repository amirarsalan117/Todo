import { useState } from "react";
export const AddForm = ({ setTask, tasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");
  const [group, setGroup] = useState("work");
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const NewTask = {
      newId,
      title,
      description,
      priority,
      group,
      done,
    };

    setTask((prev) => [...prev, NewTask]);
    setDone(false);
    setGroup("work");
    setPriority("high");
    setTitle("");
    setDescription("");
  };
  return (
    <section onSubmit={handleSubmit}>
      <form className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          className=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          className=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <select
          className=""
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>
        <button>Add New Task</button>
      </form>
    </section>
  );
};
