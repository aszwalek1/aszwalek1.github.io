import projectImage from "./../assets/project.png";

function Picture() {
    return ( 
        <>
            <div className="project-picture-container">
                <img src={projectImage} alt="Project picture" className="project-picture"></img>
            </div>
        </>
    );
}

export default Picture;