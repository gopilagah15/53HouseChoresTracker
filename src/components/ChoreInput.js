import React, { useState } from "react";

const ChoreInput = ({ addChore }) => {
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && assignee && dueDate) {
      addChore({ task, assignee, dueDate });
      setTask("");
      setAssignee("");
      setDueDate("");
    }
  };

  return (
    <div>
      <h2>Assign a Chore</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Chore Name"
        />
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Assignee"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add Chore</button>
      </form>
    </div>
  );
};

export default ChoreInput;
