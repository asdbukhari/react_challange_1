import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./addUsers.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter value",
      });
      return;
    } else if (+userAge < 1) {
      setError({ title: "Invalid age", message: "age must be greater than 0" });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserAge("");
    setUserName("");
  };

  const errorHandle = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <Card cssClass={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your Name"
            value={userName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter your Name"
            value={userAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
