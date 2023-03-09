import { useState, useEffect } from "react";
import axios from "axios"; 
import "../styles/WeatherConditions.css"; 

export const WeatherConditions = ({ club }) => {
    // useState 
    const [weather, setWeather] = useState({}); 

    // useEffect
    useEffect(() => {
        const getWeather = async (lat, lon) => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${lat},${lon}`)
                // console.log(response.data.current.condition.icon); 
                console.log("getWeather", response); 
                setWeather(response.data.current); 
            } catch(error) {
                console.log(error); 
            }
        }; 
        return () => {
            getWeather(club[0].lat, club[0].lon); 
        }
    }, [club]); 

    const windRecommendation = (wind) => {
        if(wind > 22) {
            return "Conditions are dangerous. Please consider sailing for next time."
        } else if(wind > 17) {
            return "Wind is fairly strong. Please exercise extra caution today."
        } else if(wind > 9) {
            return "Wind is fair today."
        } else {
            return "Wind is calm. You will have a great sailing today."
        };
    };

    return (
        <div className="weather__conditions">
            <div className="weather__card">
                {weather.condition ? (
                    <>
                        <h2>Condition: {weather.condition.text}</h2>
                        <img src={weather.condition.icon} alt="weather icon"/>
                    </>
                ) : (
                    null
                )}
                <h3>Temperature: {weather.temp_c}°C</h3>
                <p>Feels Like: {weather.feelslike_c}°C</p>
                <p>Wind: {weather.wind_kph}kph at {weather.wind_degree}° {weather.wind_dir}</p>
                <p>Visibility: {weather.vis_km}km</p>
                <p>Humidity: {weather.humidity}%</p>
            </div>
            <div className="weather__recommendation">
                <h1>📍 Sailing? {windRecommendation(weather.wind_kph)}</h1>
            </div>
        </div>        
    )
}