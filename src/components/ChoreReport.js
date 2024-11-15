import React from "react";

const ChoreReport = ({ chores }) => {
  const totalChores = chores.length;
  const completedChores = chores.filter((chore) => chore.completed).length;
  const pendingChores = totalChores - completedChores;

  const choreDistribution = chores.reduce((acc, chore) => {
    acc[chore.assignee] = (acc[chore.assignee] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Chore Report</h2>
      <p>Total Chores: {totalChores}</p>
      <p>Completed Chores: {completedChores}</p>
      <p>Pending Chores: {pendingChores}</p>
      <h3>Chore Distribution:</h3>
      <ul>
        {Object.entries(choreDistribution).map(([assignee, count]) => (
          <li key={assignee}>
            {assignee}: {count} chore(s)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoreReport;
