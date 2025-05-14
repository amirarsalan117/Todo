export const AddForm = () => {
  return (
    <section>
      <form className="task-form">
        <input type="text" placeholder="Task Title" className="" />
        <textarea placeholder="Description" className=""></textarea>
        <select className="">
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <select className="">
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>
      </form>
    </section>
  );
};
