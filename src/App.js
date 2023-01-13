import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
   
  ]);
  const addNewExpenseHandler = (data) => {
    const upExpenses = [...expenses];
    upExpenses.push(data);
    setExpenses(upExpenses);
  };

  return (
    <div className="App">
      <div className="items">
        <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
