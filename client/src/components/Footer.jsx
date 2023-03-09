import { Link } from "react-router-dom"; 
import { footerLinks } from "../constants/footer"; 
import github from "../assets/footer/github.svg"; 
import "../styles/Footer.css"; 

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__main">
                    <div className="footer__logo">
                        <Link to="/">Sail.ly</Link>
                    </div>
                    <div className="footer__links">
                        {footerLinks.map((item, id) => (
                            <div className="footer__links--main" key={id}>
                                <p>{item.title}</p>
                                <>
                                    {item.links.map((link, id) => (
                                        <Link to={link === "privacy policy" ? "privacy-policy" : link === "terms and conditions" ? "terms-and-conditions" : link} key={id}>
                                            <span>{link}</span>
                                        </Link>
                                    ))}
                                </>
                            </div>
                        ))}
                    </div>
                    <div className="footer__contact">
                        <p>© All rights reserved – Danny Bae</p>
                        <a href="https://www.github.com/danveb" target="_blank" rel="noreferrer noopener">
                            <img src={github} alt="github logo" />
                        </a>
                    </div>
                </div>                
            </div>
        </footer>
    );
}