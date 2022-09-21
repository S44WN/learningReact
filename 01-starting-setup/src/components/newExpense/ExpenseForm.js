import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //using three state for all three inputs
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // using one State insted of three
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setuserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expanseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
