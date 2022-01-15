import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
  //   const modalCloseHandler = (event) => {
  //     console.log("hi");
  //   };

  return (
    <div className={`${styles.card} ${props.cssClass}`}>
      {props.children}
      {/* <div className={styles.text}>
        <h1>Error</h1>
      </div>
      <div className={styles.cto}>
        <button className={styles.btn} onClick={modalCloseHandler}>close</button>
      </div> */}
    </div>
  );
};

export default Card;
