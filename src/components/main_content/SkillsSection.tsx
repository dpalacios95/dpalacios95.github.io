import { faPython, faGolang, faJs, faReact, faAws, faHtml5, faCss3, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// TODO: Change this for images instead of icons
const SkillSection = () => {
    const skills = [faPython, faGolang, faDocker, faDatabase, faJs, faReact, faAws, faHtml5, faCss3];

    return (
        <div className="skills mb-10">
            <h1 className="text-start border-solid border-gray-200 border-b-2">Skills</h1>
            <ul className="skills grid grid-cols-3 justify-items-center xl:flex xl:justify-between pt-5 list-none">
                {skills.map((skillIcon, index) => (
                    <li className="list-item p-4" key={index} >
                        <FontAwesomeIcon icon={skillIcon} className="w-12 h-12" title={skillIcon.iconName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillSection;