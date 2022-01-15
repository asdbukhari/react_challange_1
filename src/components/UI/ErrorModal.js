import React from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card cssClass={styles.modal}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.message}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
