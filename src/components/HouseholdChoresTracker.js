import React, { useState } from "react"; 
import ChoreInput from "./ChoreInput";
import ChoreList from "./ChoreList";
import Reminder from "./Reminder";
import ChoreReport from "./ChoreReport";

const HouseholdChoresTracker = () => {
  const [chores, setChores] = useState([]);

  const addChore = (chore) => {
    setChores([...chores, { ...chore, completed: false }]);
  };

  const toggleCompletion = (index) => {
    const updatedChores = chores.map((chore, i) =>
      i === index ? { ...chore, completed: !chore.completed } : chore
    );
    setChores(updatedChores);
  };

  return (
    <div>
      <h1>Household Chores Tracker</h1>
      <ChoreInput addChore={addChore} />
      <ChoreList chores={chores} toggleCompletion={toggleCompletion} />
      <Reminder chores={chores} />
      <ChoreReport chores={chores} />
    </div>
  );
};

export default HouseholdChoresTracker;
