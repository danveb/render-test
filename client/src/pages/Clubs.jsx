// import { ClubList } from "../components/ClubList";
import { clubsIntro } from "../constants/clubs";
import clubIntro from "../assets/clubs/club-intro.jpg"; 
import "../styles/Clubs.css"; 
import { ClubList } from "../components/ClubList";

export const Clubs = () => {
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
            <ClubList />
        </>
    )
}