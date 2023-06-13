import {useRef} from "react";
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const navRef = useRef<HTMLInputElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive-nav");
    }

    const hideNavbar =()=>{
        navRef.current?.classList.remove("responsive-nav");
    }

    const {pathname} = useLocation();


    return (
        <>  
            <nav ref={navRef}>
                <h3>Alicja Szwalek</h3>
                <ul >
                    <li><Link className={(pathname === '/alicja_Szwalek') ? 'active' : ''}  to="/alicja_Szwalek" onClick={hideNavbar}>Projects</Link></li>
                    <li><Link className={(pathname === '/alicja_Szwalek/about') ? 'active' : ''} to="/alicja_Szwalek/about" onClick={hideNavbar}>About me</Link></li>
                    <li><Link className={(pathname === '/alicja_Szwalek/cv') ? 'active' : ''} to="/alicja_Szwalek/cv" onClick={hideNavbar}>CV</Link></li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
                    <FaTimes />
                </button>
                <div className="social-icons">
                    <a href="https://linkedin.com/in/alicjaszwalek/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/aszwalek1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon">
                        <FaGithub />
                    </a>
                </div>
                
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
            
        </>
    );
};

export default Navbar;