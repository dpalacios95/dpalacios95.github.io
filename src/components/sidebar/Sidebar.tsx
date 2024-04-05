import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import ContactDetails from './ContactDetails';
import SocialMediaLinks from './SocialMediaLinks';


const Sidebar = () => {

    return (
        <div className="sidebar top-[10vw] left-[5vw] flex-shrink flex-nowrap lg:fixed " >
            < div className="contact-info-sidebar" >
                <img src="./images/my_photo.jpg" alt="my_photo" className="my-photo rounded-full relative mx-auto my-[-4vw] w-52 h-52 object-cover" />

                <div className='contact-info-container bg-white pt-[3rem] rounded-3xl' >

                    <div className="contact-info-wrapper text-center p-10">

                        <h1 className="m-2 font-semibold">Daniela Palacios</h1>
                        <h2 className="text-gray-600">Software Engineer</h2>

                        <SocialMediaLinks />

                        <ContactDetails />

                        <div className="download-cv-wrapper justify-center mx-auto m-10">

                            <a href={import.meta.env.VITE_CV_URL} target='_blank' download >
                                <div className="download-cv-button bg-blue-400 rounded-full p-4">
                                    <FontAwesomeIcon icon={faDownload} className='my-auto mx-2' />

                                    <span className="download-cv-text text-left">
                                        Download CV
                                    </span>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default Sidebar;