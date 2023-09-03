import React from "react";
import styles from "./HourlyLayout.module.css"
import HourlyTable from "../Components/HourlyTable";

const HourlyLayout = (props) => {
  console.log('HourlyLayout..........');
  console.log(props.forecast);
    return (
        <div className={styles.layout}>
            <HourlyTable forecast={props.forecast}></HourlyTable>
        </div>
    );
}

export default HourlyLayout;