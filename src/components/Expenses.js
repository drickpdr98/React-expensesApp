import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpensesList from "./NewExpense/ExpensesList";
import ExpensesChart from "../components/NewExpense/ExpensesChart";

export default function Expenses(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const onChangeFilterHandler = (value) => setFilteredYear(value);

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilter={onChangeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}
