import React from "react";

import Card from "../UI/Card";

import styles from "./listUser.module.css";

const ListUsers = (props) => {
  return (
    <Card cssClass={styles.ul}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random()}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListUsers;
