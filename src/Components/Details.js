import React from "react";
import styles from "./Details.module.css";

const Details = (props) => {
  return (
    <div className={styles.layout}>
      <p className={styles.title}>Current Weather Details</p>
      <div className={styles.more}>
        <p className={styles.temp}>
          {props.tempc}°C ({props.tempf}°F)
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.columnleft}>
                <p>
                  Feels: {props.feelc}°C ({props.feelf}°F)
                </p>
                <p>Snow: {props.snow}cm</p>
                <p>Rain: {props.rain}mm</p>
                <p>Humidity: {props.humid}%</p>
                <p>Wind Speed: {props.wind}km/h</p>
                <p>Vision: {props.vision}km</p>
              </td>
              <td className={styles.columnright}>
                <p>Sunrise: {props.sunrise}</p>
                <p>Sunset: {props.sunset}</p>
                <p>UV: {props.uv}</p>
                <p>Moonrise: {props.moonrise}</p>
                <p>Moonset: {props.moonset}</p>
                <p>Moon Phase: {props.moonphase}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.alerts}>
        <p className={styles.alerttitle}>Weather Alert Infomation</p>
        <p className={styles.alerttext}>
          There are no weather alerts at this time.
        </p>
      </div>
      <p className={styles.cite}>
        Weather data and icons provided by{" "}
        <a
          href="https://www.weatherapi.com/"
          rel="noreferrer"
          color="white"
          target="_blank"
        >
          Free Weather API
        </a>
      </p>
    </div>
  );
};

export default Details;
