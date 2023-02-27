import { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => setTitle("Updated");

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item ">{title}</h2>
        <p className="expense-item__price">${props.amount}</p>
        <button onClick={clickHandler}>Click</button>
      </div>
    </div>
  );
}

export default ExpenseItems;
