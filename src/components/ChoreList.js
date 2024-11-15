import React from "react";

const ChoreList = ({ chores, toggleCompletion }) => {
  return (
    <div>
      <h2>Chore List</h2>
      <ul>
        {chores.map((chore, index) => (
          <li key={index}>
            <span>
              {chore.task} - {chore.assignee} (Due: {chore.dueDate})
            </span>
            <input
              type="checkbox"
              checked={chore.completed}
              onChange={() => toggleCompletion(index)}
            />
            {chore.completed ? " ✅ Completed" : " ⏳ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoreList;
