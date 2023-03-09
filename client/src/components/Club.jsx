import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ClubMap } from "./ClubMap";
import { WeatherConditions } from "./WeatherConditions";
import { Spinner } from "./Spinner";
import "../styles/Club.css"; 

export const Club = () => {
    // API_URL 
    const API_URL = process.env.REACT_APP_API_URL; 

    // useState
    const [club, setClub] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 

    // useLocation
    const location = useLocation(); 
    const clubID = location.pathname.split("/")[2]; 

    // useEffect
    useEffect(() => {
        const getClub = async () => {
            const response = await axios.get(`${API_URL}/api/clubs/${clubID}`);
            console.log(response); 
            setIsLoading(!isLoading); 
            setClub(response.data); 
        };
        return () => {
            getClub(); 
        };
    }, [clubID, isLoading, API_URL]);

    return (
        <div className="club" data-testid="club">
            {!isLoading ? (
                <Spinner />
            ) : (
                <div className="club__wrapper">
                    {club.map((c) => (
                        <div key={c.id} className="club__main">
                            <div className="club__info">
                                <h1>{c.name}</h1>
                                <p>{c.city}, {c.state} {c.zip}</p>
                                <span>Latitude: {c.lat.toFixed(2)}°</span>
                                <span>Longitude: {c.lon.toFixed(2)}°</span>
                            </div>
                            <div className="club__map">
                                <ClubMap latitude={c.lat.toFixed(2)} longitude={c.lon.toFixed(2)} />
                            </div>
                            <div className="club__weather">
                                {/* Weather Conditions */}
                                <WeatherConditions club={club} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>    
    )
}