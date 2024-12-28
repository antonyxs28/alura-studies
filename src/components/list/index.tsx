import "./style.css";
export function List() {
  const tasks = [
    { task: "Task 1", time: "02:00" },
    { task: "Task 2", time: "03:30" },
    { task: "Task 3", time: "05:15" },
    { task: "Task 4", time: "08:00" },
    { task: "Task 5", time: "12:45" },
  ];
  return (
    <aside>
      <h1>Estudos do dia</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
