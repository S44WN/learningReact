import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addFormHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
