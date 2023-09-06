import SoftwareHut_Image from '../components/SoftwareHut_Image';
import SystemsDesign_Image from '../components/SystemsDesign_Image';

const Projects = () => {
    return (
        <div className="page-container" id='slide'>
            <div className='columns-container'>
                <div className='projects-left-column'>
                    <div>
                        <SoftwareHut_Image/>
                    </div>
                    <div className='project-picture-2'>
                        <SystemsDesign_Image/>
                    </div>
                    <div className='project-picture-3'>
                        <SystemsDesign_Image/>
                    </div>
                    
                </div>
                <div className='projects-right-column'>
                    <h4 className="page-title">Featured Projects</h4>
                    
                    <div className="project" >
                        <p className="project-title">Software Hut</p>
                        <p>Led the front-end team and assisted team members in learning the required skills</p>
                        <p>Managed diverse stages of software development lifecycle: requirement construction through customer communication, agile software development, documentation, and testing. </p>
                        <p>Developed a web application utilising Ruby on Rails, HTML5, CSS, PostgreSQL, and JavaScript. Ensured quality through unit tests and BDD testing. </p>
                        <p className="language">Ruby on Rails&ensp;</p>
                        <p className="language">JavaScript&ensp;</p>
                        <p className="language">HAML&ensp;</p>
                        <p className="language">CSS&ensp;</p>  
                        <p className="language">PosgreSQL</p>  
                    </div>
                    <div className="project">
                        <p className="project-title">Task Management Application</p>
                        <p>Created a Java Spring Boot application with React frontend and MongoDB</p>
                        <p>Designed and implemented key features including CRUD operations, filtering, password hashing, dashboard, and user registration.</p>
                        <p>Rigorously tested the application using both unit and integration tests (JUnit and Spring's testing framework).</p>
                        <p className="language">Java&ensp;</p>
                        <p className="language">React&ensp;</p>
                        <p className="language">MongoDB&ensp;</p>
                        <p className="language">HTML&ensp;</p>
                        <p className="language">CSS</p>
                    </div>

                    <div className="project">
                        <p className="project-title">Bike Selling Company Application</p>
                        <p>Cooperated in a team to develop a Java and MySQL application for a fictitious company</p>
                        <p>Enhanced UML class diagram and state machine skills</p>
                        <p>Employed Kanban and pair programming methodologies to drive project development</p>
                        <p className="language">Java&ensp;</p>
                        <p className="language">MySQL</p>
                    </div>
                    
                    <div className="project">
                        <p className="project-title">Particle Swarm Optimisation</p>
                        <p>Dissertation project 2023-2024</p>
                        <p>Currently developing a particle swarm optimisation as a teaching tool</p>
                        <p className="language">Python</p>
                    </div>
                    
                 

                    <p className='visit-github'>Visit my Github to see the code</p>
                </div>
                
            </div>
            

        </div>

    );
};

export default Projects;