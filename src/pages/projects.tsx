import Picture from '../components/Picture';

const Projects = () => {
    return (
        <div className="page-container" id='slide'>
            <h4 className="page-title">Featured Projects</h4>
            <div className="project" >
                <p className="project-title">Software Hut</p>
                <p className="work-type">Front-end</p>
                <p>Software engineering group assignment 2023</p>
                <p className="language">Ruby on Rails&ensp;</p>
                <p className="language">JavaScript&ensp;</p>
                <p className="language">HAML&ensp;</p>
                <p className="language">CSS</p>
                <div>
                    <Picture/>
                </div>
                
            </div>

            <div className="project">
                <p className="project-title">Java Application</p>
                <p>Front-end</p>
                <p>Java group assignment 2023</p>
                <p className="language">Java</p>
                <div>
                    <Picture/>
                </div>
            </div>

            <div className="project">
                <p className="project-title">Personal Website</p>
                <p>Full-stack</p>
                <p>Individual summer project</p>
                <p className="language">React&ensp;</p>
                <p className="language">TypeScript&ensp;</p>
                <p className="language">Vite&ensp;</p>
                <p className="language">CSS</p>
                <Picture/>
               
            </div>

        </div>

    );
};

export default Projects;