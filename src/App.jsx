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
  return (
    <>
      <div className="app-container">
        {/* Header */}
        <Header />
        {/* Sub-message */}
        <SubMessage />
        {/* Task Entry Form */}
        <AddForm />
        {/* Task List */}
        <Tasks tasks={tasks} />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
