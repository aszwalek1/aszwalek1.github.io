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
                <div className="color-dot-1"></div>
                <p className="top-language">Java</p>
                <div className="color-dot-2"></div>
                <p className="top-language right-language-dot">JavaScript & TypeScript</p>
            </div>
            <div className="color-dots">
                <div className="color-dot-3"></div>
                <p>Python</p>
                <div className="color-dot-4"></div>
                <p className="right-language-dot">Ruby</p>
            </div>
            

        </div>

    );
};

export default About;