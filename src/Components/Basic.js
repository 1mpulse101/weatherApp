import React from "react";
import styles from "./Basic.module.css";

const Basic = (props) => {
  return (
    <div className={styles.basic}>
      <p className={styles.city}>{props.city}</p>
      <div className={styles.formattemp}>
        <p className={styles.temp}>{props.tempc}°C</p>
        <img
          src={props.icon}
          alt="Weather icon provided by Free Weather API"
          className={styles.icon}
        ></img>
      </div>
    </div>
  );
};

export default Basic;
