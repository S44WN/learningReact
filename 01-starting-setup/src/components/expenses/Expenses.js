import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/card";
import ExpenseFilter from "../ui/ExpenseFilter";
import { useState } from "react";
// main expenses page
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullyear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {filteredExpenses.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
