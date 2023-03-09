import { aboutSailing } from "../constants/about"; 
import aboutSailTop from "../assets/about/about.jpg"; 
import "../styles/About.css"; 

export const About = () => {
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__main">
                    <div className="about__top">
                        <img src={aboutSailTop} alt="sailing yacht in ocean" />
                    </div>
                    <div className="about__bottom">
                        {aboutSailing.map((item) => (
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
    )
}
