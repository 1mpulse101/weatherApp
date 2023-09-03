import React from "react";
import styles from "./FindCity.module.css";

const FindCity = (props) => {

  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      props.update(document.getElementById('city').value);
    }
  }

  return (
    <React.Fragment>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="Search for a city"
        autoComplete="off"
        className={styles.search}
        onKeyDown={checkEnter}
      ></input>
    </React.Fragment>
  );
};

export default FindCity;
