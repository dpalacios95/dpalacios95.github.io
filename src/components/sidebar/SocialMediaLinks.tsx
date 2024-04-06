import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialMediaLinks = () => {
    return (
        <ul className="flex list-none justify-center items-center mt-5 mb-5">
            <li className='p-2'>
                <a href={import.meta.env.VITE_LINKEDIN_ACCOUNT} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' />
                </a>
            </li>
            <li className='p-2'>
                <a href={import.meta.env.VITE_GITHUB_ACCOUNT} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
                </a>
            </li>
        </ul>
    )
}


export default SocialMediaLinks;