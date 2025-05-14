export const Footer = ({ tasks }) => {
  const DoneTask = tasks.filter((t) => t.done).length;
  const remaning = tasks.filter((t) => !t.done).length;
  return (
    <footer className="footer">
      Done: <span className="done-count">{DoneTask}</span>, Remaining:{" "}
      <span className="remain-count">{remaning}</span>
    </footer>
  );
};
