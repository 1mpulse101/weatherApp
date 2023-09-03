import React from "react";
import styles from "./HourlyItem.module.css";

const HourlyItem = (props) => {
  return (
    <div className={styles.item}>
      <p className={styles.time}>{props.time}</p>
      <img
        src={props.icon}
        alt="Weather icon provided by Free Weather API"
        className={styles.icon}
      ></img>
      <p className={styles.temp}>{props.tempc}°C</p>
      <p className={styles.stats}>Feels: {props.feelsc}°C</p>
      <p className={styles.stats}>Rain: {props.rain}%</p>
      <p className={styles.stats}>Snow: {props.snow}%</p>
      <p className={styles.stats}>Humidity: {props.humid}%</p>
      <p className={styles.stats}>Wind: {props.wind}km</p>
    </div>
  );
};

export default HourlyItem;
