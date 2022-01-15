import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import styles from "./errorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
//test comment
const ModalOverlay = (props) => {
  return (
    <Card cssClass={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.message}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.footer}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default ErrorModal;
