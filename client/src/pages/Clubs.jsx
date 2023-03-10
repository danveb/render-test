import { useState, useEffect } from "react"; 
import { clubsIntro } from "../constants/clubs";
import axios from "axios"; 
import clubIntro from "../assets/clubs/club-intro.jpg"; 
import "../styles/Clubs.css"; 
import search from "../assets/search/search.svg"; 
import { ClubCard } from "../components/ClubCard"; 
import { Spinner } from "../components/Spinner"; 

export const Clubs = () => {
    // API_URL
    const API_URL = process.env.REACT_APP_API_URL; 

    // useState
    const [clubList, setClubList] = useState([]); 
    const [query, setQuery] = useState(""); 
    const [loading, setLoading] = useState(false); 

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
                setClubList(response.data); 
                setLoading(true); 
                // setLoading(false);  
            } catch(error) {
                console.log(error.message); 
            }; 
        };
        getClubList(); 
    }, [API_URL, loading]); 

    return (
        <>
            <div className="clubs">
                <div className="clubs__wrapper">
                    <div className="clubs__main">
                        <div className="clubs__top">
                            <img src={clubIntro} alt="sailing yacht in ocean" />
                        </div>
                        <div className="clubs__bottom">
                            {clubsIntro.map((item) => (
                                <div key={item.id}>
                                    <h2>{item.header}</h2>
                                    <p>{item.text_intro}</p>
                                    <p>{item.text_main}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* CLUBLIST */}
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
                    {!loading ? (
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
        </>
    )
}