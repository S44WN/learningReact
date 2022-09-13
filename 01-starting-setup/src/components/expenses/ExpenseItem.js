import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/card";

function ExpenseItem(props) {
  const clickHandler = () => {
    return console.log("clickedd!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
