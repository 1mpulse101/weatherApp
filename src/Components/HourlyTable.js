import React from "react";
import HourlyItem from "./HourlyItem";

const HourlyTable = (props) => {
  console.log("HourlyTable..........");
  console.log(props.forecast);
  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          {props.forecast.map((item) => (
            <td key={item.id}>
              <HourlyItem
                time={item.time}
                tempc={item.tempc}
                feelsc={item.feelsc}
                rain={item.rain}
                snow={item.snow}
                humid={item.humid}
                icon={item.icon}
                wind={item.wind}
              ></HourlyItem>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default HourlyTable;
