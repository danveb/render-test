import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { navLinks } from "../constants/nav"; 
import "../styles/Navbar.css"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useEffect 
    // when resizing window we'll handle state back to closing mobileMenu/navbar bg
    useEffect(() => {
        const handleResize = () => {
            if(menuOpen) {
                setMenuOpen(!menuOpen); 
            };
        };

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize); 
        };
    }, [menuOpen, setMenuOpen]);

    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar__wrapper">
                <div className="navbar__top">
                    <Link to="/">Sail.ly</Link>
                </div>
                <div className="navbar__bottom">
                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link to={link.path}>{link.text}</Link> 
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}