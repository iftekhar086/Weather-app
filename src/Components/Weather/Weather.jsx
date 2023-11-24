import  { useState  } from "react";
import { Button} from "react-bootstrap";
import styles from './Weather.module.css';

const Weather = () => {
  const [cityname, setCityname] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const search = () => {
    if (cityname === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4e69444a2504e8fce47d0d2d0626a43c`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === '404') {
          setError('City not found');
        } else {
          setWeather(result);
          setError(null);
        }
        setCityname('');
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError('Error fetching weather data');
        setCityname('');
      });
  };
  
const dateBuilder=(d)=>{
  let months=["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
  let days=["Sunday", "Monday", "Tuesday","wednesday","Thursday","Friday","Saturday"];
  
  let day=days[d.getDay()];
  let date=d.getDay();
  let month=months[d.getMonth()];
  let year=d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

 
  // useEffect(() => {
  // }, [cityname]);

  return (
    <div className={styles.App}>
      <main>
        <div className={styles.searchbox}>
          <input
            type="text"
            className={styles.inputfield}
            placeholder="Enter Your City Name..."
            value={cityname}
            onChange={(e) => setCityname(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && search()}
          />
          <Button className="m-3" variant="success" onClick={search}>Search</Button>
        </div>
<div>
  
</div>
         {error && <p className={styles.error}>{error}</p>}
        {weather.main && (
          <div className={styles.weatherdetails}>
          <div>
              <h1>{weather.name}, {weather.sys.country}</h1>
              <h3>{dateBuilder(new Date())}</h3>
              <p>{weather.weather[0].description}</p>
              <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              </div>
          </div>
        )} 
      </main>
      </div>
  );
};

export default Weather;
