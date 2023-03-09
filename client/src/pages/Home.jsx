import chevronDown from "../assets/home/chevron-down.svg"; 
import "../styles/Home.css"; 

export const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home__top">
                    <div className="home__top--title">
                        <h1>#SS | 23</h1>
                        <h3>Dream in open waters</h3>
                        {/* LINK to clubs */}
                    </div>
                    <div className="home__top--bg"></div>
                    <img src={chevronDown} alt="chevron down arrow" />
                </div>
            </div>
        </div>
    )
}