import { useState, useEffect } from "react"; 
import { ClubCard } from "./ClubCard"; 
import { Spinner } from "./Spinner"; 
import axios from "axios"; 
import search from "../assets/search/search.svg"; 
import "../styles/ClubList.css"; 

export const ClubList = () => {
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useState
    const [clubList, setClubList] = useState([]); 
    const [query, setQuery] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
    };

    const handleChange = (e) => {
        setQuery(e.target.value); 
    }; 

    useEffect(() => {
        const getClubList = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/clubs`); 
                console.log(response); 
                setIsLoading(!isLoading); 
                setClubList(response.data); 
            } catch(error) {
                console.log(error); 
            };
        }; 
        return () => {
            getClubList(); 
        };
    }, [isLoading, API_URL]); 
    
    return (
        <div className="clubList">
            <div className="clubList__wrapper">
                <form className="clubList__search" onSubmit={handleSubmit}>
                    <input 
                        id="search"
                        type="text" 
                        placeholder="Search Club by Name or City"
                        onChange={handleChange}
                    />
                    <img src={search} alt="search logo" />
                </form>
                {!isLoading ? (
                    <Spinner />
                ) : (
                    <div className="clubList__grid">
                        {clubList.filter((club) => club.name.toLowerCase().includes(query) || club.city.includes(query)).map((club) => (
                            <ClubCard
                                key={club.id}
                                id={club.id}
                                name={club.name}
                                address={club.address}
                                city={club.city}
                                state={club.state}
                                zip={club.zip}
                                lat={club.lat}
                                lon={club.lon}
                                tel={club.tel}
                                url={club.url}
                                snake={club.snake}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}