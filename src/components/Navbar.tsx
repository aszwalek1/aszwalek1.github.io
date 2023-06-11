import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    const navRef = useRef<HTMLInputElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive-nav");
    }

    return (
        <>  
            <nav ref={navRef}>
                <h3>Alicja Szwalek</h3>
                <ul >
                    <li><a className="active" href="index.html">Projects</a></li>
                    <li><a href="index.html">About me</a></li>
                    <li><a href="index.html">CV</a></li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </>
    );
}

export default Navbar;