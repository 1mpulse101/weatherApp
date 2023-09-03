import React from "react";
import Greet from "../Components/Greet";
import Basic from "../Components/Basic";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Greet></Greet>
      <Basic city={props.city} tempc={props.tempc} icon={props.icon}></Basic>
    </div>
  );
};

export default Header;
