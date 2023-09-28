type TasksListProps = {
  tasks: string[];
  deleteTask: (index: number) => any;
};

function TasksList({ tasks, deleteTask }: TasksListProps) {
  return (
    <>
      <div className="list-box">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="list">
              <span>
                <input type="checkbox" name="" id="" />
              </span>
              <span className="task">{task}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-2 delete-icon"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TasksList;
