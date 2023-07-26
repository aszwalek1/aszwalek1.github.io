import Picture from '../components/Picture';

const Projects = () => {
    return (
        <div className="page-container" id='slide'>
            <h4 className="page-title">Featured Projects</h4>

            <div className="project" >
                <p className="project-title">Software Hut</p>
                <p className="work-type">Full-stack</p>
                <p>Worked in a team of 6 to develop a Ruby on Rails application for <br></br>
                    the Department of Electronic and Electrical Engineering</p>
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
                <p>Led the front-end team for a university project that involved <br></br> developing a Java application for a fictitious company</p>
                <p className="language">Java</p>
                <div>
                    <Picture/>
                </div>
            </div>

            <div className="project">
                <p className="project-title">Particle Swarm Optimisation</p>
                <p>Dissertation project 2023-2024</p>
                <p>Currently developing a particle swarm optimisation as a teaching tool</p>
                <p className="language">Python</p>
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
            <p className='visit-github'>Visit my Github to see the code</p>
        </div>

    );
};

export default Projects;