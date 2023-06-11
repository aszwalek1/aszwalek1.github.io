import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navRef = useRef<HTMLInputElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive-nav");
    }

    const hideNavbar =()=>{
        navRef.current?.classList.remove("responsive-nav");
    }

    return (
        <>  
            <nav ref={navRef}>
                <h3>Alicja Szwalek</h3>
                <ul >
                    <li><Link to="/alicja_Szwalek" className="active" onClick={hideNavbar}>Projects</Link></li>
                    <li><Link to="/alicja_Szwalek/about" onClick={hideNavbar}>About me</Link></li>
                    <li><Link to="/alicja_Szwalek/cv" onClick={hideNavbar}>CV</Link></li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </>
    );
};

export default Navbar;