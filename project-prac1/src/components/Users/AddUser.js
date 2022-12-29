import React from "react";

const AddUser = (props) => {
  const addFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addFormHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
