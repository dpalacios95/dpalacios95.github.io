import ContactDetailRow from "./ContactDetailRow"

import { faMobileScreen, faEnvelope, faMapMarkerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';


const ContactDetails = () => {
    const personalContactDetails: { [key: string]: string } = {
        phone: "+64 0210 632 039",
        email: "daniela.palaciossc@gmail.com",
        location: "Auckland, New Zealand",
    }

    const icons: { [key: string]: IconDefinition } = {
        phone: faMobileScreen,
        email: faEnvelope,
        location: faMapMarkerAlt
    }

    let maxIndex = Object.keys(personalContactDetails).length - 1;

    return (
        <div className="contact-details rounded-2xl bg-gray-100 sm:block">
            {
                Object.entries(personalContactDetails).map(([k, v], index) => (
                    <ContactDetailRow key={k} fieldName={k} data={v} iconDef={icons[k]} addBorder={index !== maxIndex} />
                ))
            }
        </div>
    )
}

export default ContactDetails;