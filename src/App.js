import React, { useState, useEffect, useCallback } from "react";
import Header from "./Layout/Header";
import Details from "./Components/Details";
import FindCity from "./Components/FindCity";
import HourlyLayout from "./Layout/HourlyLayout";
import styles from "./App.module.css";

function App() {
  //const [startup, setStartup] = useState(true);
  const [city, setCity] = useState("Toronto");
  const [detailData, setDetailData] = useState({});

  const [forecast, setForecast] = useState([]);

  const d = new Date();
  let hour = d.getHours();

  const formatTime = (time) => {
    let displayTime = time;
    if (time > 12) {
      displayTime = time - 12;
    }
    if (time > 11 && time < 24) {
      return displayTime.toString().concat(":00 PM");
    }
    return displayTime.toString().concat(":00 AM");
  };

  const fetchWeatherData = useCallback(() => {
    console.log("start fetch");
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c79bb39a9bf44da7a20164707231007&q=${city}&days=2&aqi=no&alerts=yes/`
    ) //dont look at the key :)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //current data
        setDetailData((predetailData) => ({
          ...predetailData,
          tempc: data.current.temp_c,
          tempf: data.current.temp_f,
          feelc: data.current.feelslike_c,
          feelf: data.current.feelslike_f,
          icon: data.current.condition.icon,
          wind: data.current.wind_kph,
          rain: data.current.precip_mm,
          humid: data.current.humidity,
          uv: data.current.uv,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          moonrise: data.forecast.forecastday[0].astro.moonrise,
          moonset: data.forecast.forecastday[0].astro.moonset,
          moonphase: data.forecast.forecastday[0].astro.moon_phase,
          snow: data.forecast.forecastday[0].day.totalsnow_cm,
          vision: data.current.vis_km,
        }));

        let count = 0;
        let hours = hour;
        let day = 0;
        let newForecast = [];
        while (count < 8) {
          newForecast.push({
            id: hours,
            time: formatTime(hours),
            tempc: data.forecast.forecastday[day].hour[hours].temp_c,
            feelsc: data.forecast.forecastday[day].hour[hours].feelslike_c,
            rain: data.forecast.forecastday[day].hour[hours].chance_of_rain,
            snow: data.forecast.forecastday[day].hour[hours].chance_of_snow,
            humid: data.forecast.forecastday[day].hour[hours].humidity,
            wind: data.forecast.forecastday[day].hour[hours].gust_kph,
            icon: data.forecast.forecastday[day].hour[hours].condition.icon,
          });
          count++;
          hours++;
          if (hours === 24) {
            hours = 0;
            day = 1;
          }
        }

        setForecast(newForecast);
        console.log("forcast set: ");
      });
  }, [hour, city]);

  // if (startup) {
  //   fetchWeatherData();
  //   setStartup(false);
  // }

  const updateWebsite = (input) => {
    setCity(input);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, fetchWeatherData]);

  console.log("app..........");
  //console.log(detailData);
  console.log(forecast);

  return (
    <div className={styles.background}>
      <Details
        tempc={detailData.tempc}
        tempf={detailData.tempf}
        feelc={detailData.feelc}
        feelf={detailData.feelf}
        wind={detailData.wind}
        rain={detailData.rain}
        humid={detailData.humid}
        uv={detailData.uv}
        sunrise={detailData.sunrise}
        sunset={detailData.sunset}
        moonrise={detailData.moonrise}
        moonset={detailData.moonset}
        moonphase={detailData.moonphase}
        snow={detailData.snow}
        vision={detailData.vision}
      ></Details>
      <FindCity update={updateWebsite}></FindCity>
      <Header
        city={city}
        tempc={detailData.tempc}
        icon={detailData.icon}
      ></Header>
      <HourlyLayout forecast={forecast}></HourlyLayout>
    </div>
  );
}

export default App;
