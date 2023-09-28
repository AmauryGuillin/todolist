import { useState } from "react";

type InputProps = {
  className: string;
  placeholder: string;
  addTask: (task: string) => void;
};

function Input({ className, placeholder, addTask }: InputProps) {
  const [task, setTask] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    addTask(task);
    setTask("");
  }

  function handleChange(e: any) {
    setTask(e.target.value);
  }

  return (
    <>
      <div className="input-box">
        <form>
          <input
            placeholder={placeholder}
            type="text"
            value={task}
            onChange={handleChange}
            className={className}
          />
          <button onClick={handleSubmit} hidden></button>
        </form>
      </div>
    </>
  );
}

export default Input;
