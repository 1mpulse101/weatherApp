import React from "react";
import styles from "./Greet.module.css";

const Greet = () => {
    const d = new Date();
    let year =  d.getFullYear();
    let month = d.toLocaleString('default', { month: 'long' });
    let day = d.getDate();
    let hour = d.getHours();
    let minute = (d.getMinutes()).toString().padStart(2, "0");
    let meridiem = "AM";
    let phrase = "Enjoy Your Morning!";
    let displayHour = hour;
    if (hour > 12) {
        displayHour = hour - 12;
    }
    if (hour > 11 && hour < 24) {
        meridiem = "PM";
    }
    let displayTime = <p className={styles.time}>{displayHour}:{minute} {meridiem} &#127751;</p>;
    if (hour >= 12) {
        phrase = "Enjoy Your Afternoon!";
        displayTime = <p className={styles.time}>{displayHour}:{minute} {meridiem} &#127803;</p>;
    }
    if (hour >= 18) {
        phrase = "Enjoy Your Evening!";
        displayTime = <p className={styles.time}>{displayHour}:{minute} {meridiem} &#127750;</p>;
    }
    if (hour >= 21) {
        phrase = "Enjoy Your Night!";
        displayTime = <p className={styles.time}>{displayHour}:{minute} {meridiem} &#127747;</p>;
    }

    return (
        <div className={styles.greet}>
            {displayTime}
            <p className={styles.date}>{month} {day}, {year}</p>
            <p className={styles.phrase}>{phrase}</p>
            <p className={styles.phrase}>Weather Alerts: None</p>
        </div>
    );
}

export default Greet;