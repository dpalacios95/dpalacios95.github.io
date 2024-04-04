import { faAws, faCss3, faGolang, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../projects/ProjectCard";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


const MainContent = () => {
    const skills = [faPython, faGolang, faDatabase, faJs, faReact, faAws, faHtml5, faCss3];

    const projects = [
        {
            name: "Polyominoes",
            url: "https://github.com/dpalacios95/polyominoes_exercise",
            description: "Python exercise to calculate unique fixed polyominoes."
        }
    ]

    return (
        <div className="relative overflow-x-hidden overflow-y-scroll no-scrollbar sm:left-0 sm:right-[20vw] sm:w-[50vw]">
            <div className="page-wrapper bg-red-50 rounded-xl">
                <div className="m-10 p-10">
                    <div className="about mb-10">
                        <h1 className="text-start border-solid border-gray-200 border-b-2">About</h1>
                        <p className="pt-5 text-justify">
                            I am a Software Engineer from Buenos Aires, Argentina, with experience in diverse technologies
                            and products. Throughout my career, I have showcased my ability to write code
                            adhering to the highest industry standards while working collaboratively in
                            diverse teams. I have consistently contributed to enhancing our work
                            methodologies and emphasizing knowledge-sharing for collective progress.
                        </p>
                    </div>

                    <div className="skills mb-10">
                        <h1 className="text-start border-solid border-gray-200 border-b-2">Skills</h1>
                        <ul className="skills grid grid-cols-3 justify-items-center xl:flex xl:justify-between pt-5 list-none">
                            {skills.map((skillIcon) => (
                                <li className="list-item p-4" >
                                    <FontAwesomeIcon icon={skillIcon} className="w-12 h-12" title={skillIcon.iconName} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="projects mb-10">
                        <h1 className="text-start border-solid border-gray-200 border-b-2">Projects</h1>
                        {projects.map((project) => (
                            <ProjectCard
                                projectTitle={project.name}
                                projectURL={project.url}
                                briefDescription={project.description} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default MainContent;