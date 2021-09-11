// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Components/Form";
import WeatherCard from "./Components/WeatherCard";
import {useSelector} from "react-redux";
import ToggleTheme from "./Components/ToggleTheme";

function App() {
  // const [place, setPlace] = useState("");
  // const [placeData, setPlaceData] = useState({});
  // const updatePlaceData = () => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=a808afe10fcc4ea0bf5133608212608&q=${place}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPlaceData(data);
  //     });
  // };
  const theme = useSelector((state) => state.theme)
  console.log(theme)
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme/>
      <Form/>
      <WeatherCard/>
          
          
        </div>
      
  );
}

export default App;
