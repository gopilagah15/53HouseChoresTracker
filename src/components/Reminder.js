import React from "react";

const Reminder = ({ chores }) => {
  const today = new Date().toISOString().split("T")[0];
  const upcomingChores = chores.filter(
    (chore) => !chore.completed && chore.dueDate <= today
  );

  return (
    <div>
      <h2>Reminders</h2>
      {upcomingChores.length > 0 ? (
        <ul>
          {upcomingChores.map((chore, index) => (
            <li key={index}>
              {chore.task} - {chore.assignee} (Due: {chore.dueDate})
            </li>
          ))}
        </ul>
      ) : (
        <p>All chores are on track!</p>
      )}
    </div>
  );
};

export default Reminder;
