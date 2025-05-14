import "./App.css";
import { AddForm } from "./components/Forms/AddForm";
import { Tasks } from "./components/Tasks/Tasks";
import { SubMessage } from "./components/UI/SubMessage/submessage";
import { Header } from "./components/UI/header/header";
import { Footer } from "./components/UI/Footer/footer";
import { useState } from "react";
import { TasksData } from "./data";
function App() {
  const [tasks, setTask] = useState(TasksData);

  const onToggleDone = (id, isDone) => {
    setTask(tasks.map((t) => (t.id === id ? { ...t, done: isDone } : t)));
  };
  const handleDeleteTask = (id) => {
    setTask((prevTask) => prevTask.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="app-container">
        {/* Header */}
        <Header />
        {/* Sub-message */}
        <SubMessage />
        {/* Task Entry Form */}
        <AddForm setTask={setTask} tasks={tasks} />
        {/* Task List */}
        <Tasks
          tasks={tasks}
          onToggleDone={onToggleDone}
          handleDeleteTask={handleDeleteTask}
        />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
