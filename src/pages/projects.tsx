import SoftwareHut_Image from '../components/SoftwareHut_Image';
import SystemsDesign_Image from '../components/SystemsDesign_Image';

const Projects = () => {
    return (
        <div className="page-container" id='slide'>
            <div className='columns-container'>
                <div className='projects-left-column'>
                    <h4 className="page-title">Featured Projects</h4>
                    
                    <div className="project" >
                        <p className="project-title">Software Hut</p>
                        <p>Worked in a team of 6 to develop a Ruby on Rails application for <br></br>
                            the Department of Electronic and Electrical Engineering</p>
                        <p>Used User Stories and Kanban to manage the development process</p>
                        <p className="language">Ruby on Rails&ensp;</p>
                        <p className="language">JavaScript&ensp;</p>
                        <p className="language">HAML&ensp;</p>
                        <p className="language">CSS</p>  
                    </div>

                    <div className="project">
                        <p className="project-title">Java Application</p>
                        <p>Developed a Java application for a fictitious company</p>
                        <p className="language">Java</p>
                    </div>
                    
                    <div className="project">
                        <p className="project-title">Particle Swarm Optimisation</p>
                        <p>Dissertation project 2023-2024</p>
                        <p>Currently developing a particle swarm optimisation as a teaching tool</p>
                        <p className="language">Python</p>
                    </div>
                    
                    <div className="project">
                        <p className="project-title">Personal Website</p>
                        <p>Individual summer project</p>
                        <p className="language">React&ensp;</p>
                        <p className="language">TypeScript&ensp;</p>
                        <p className="language">Vite&ensp;</p>
                        <p className="language">CSS</p>
                    </div>

                    <p className='visit-github'>Visit my Github to see the code</p>
                </div>
                <div className='projects-right-column'>
                    <div>
                        <SoftwareHut_Image/>
                    </div>
                    <div>
                        <SystemsDesign_Image/>
                    </div>
                    <div>
                        <SystemsDesign_Image/>
                    </div>
                    <div>
                        <SystemsDesign_Image/>
                    </div>
                </div>
            </div>
            

        </div>

    );
};

export default Projects;