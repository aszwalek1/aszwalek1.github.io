const About = () => {
    return (
        <div className="page-container" id="slide">
            <h4 className="page-title">About me</h4>
            <p className="languages">Programming Languages</p>
            <div className="language-bar">
                <div className="language-1"></div>
                <div className="language-2"></div>
                <div className="language-3"></div>
                <div className="language-4"></div>
            </div>
            <div className="color-dots">
                <div className="dot color-dot-1"></div>
                <p className="top-language">Java</p>
                <div className="dot color-dot-2 js"></div>
                <p className="top-language right-language-dot ">JS/TS/React</p>
            </div>
            <div className="color-dots">
                <div className="dot color-dot-3"></div>
                <p>Python</p>
                <div className="dot color-dot-4"></div>
                <p className="right-language-dot">Ruby</p>
            </div>
            <br></br>
            <p className="about-me">My name is Alicja Szwalek and I am a third-year Computer Science student at The University of Sheffield. 
                My primary interests have been 
                Software Design and Development, Text Processing and Bio-inspired Computing.
                <br></br>
                In my free time I learn game development to prepare for my next GameJam and volunteer at Siemens' Digital Innovation Zone to assist other students and small business owners in learning digital skills such as CAD Software (Solid Edge),
                 3D Scanning and Modelling, and IoT Software (MindSphere)
                 <br></br>
                 I am currently searching for a software engineering graduate job
            </p>

        </div>

    );
};

export default About;