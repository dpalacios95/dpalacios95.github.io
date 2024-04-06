import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetailRow = ({ fieldName, data, iconDef, addBorder }: { fieldName: string, data: string, iconDef: IconDefinition, addBorder: boolean }) => {
    return (
        <div className={`contact-detail my-auto sm:flex items-center break-words ${addBorder ? 'border-solid border-gray-200 border-b-2' : ''}`}>
            <div className={`contact-detail-icon sm:mx-5 hidden lg:block`}>
                <FontAwesomeIcon icon={iconDef} className="mx-auto" />
            </div>
            <div className="contact-detail-info-text text-left ">
                <span className="text-sm text-left text-gray-400">
                    {fieldName.toUpperCase()}
                </span>
                <p className="text-lg">

                    {data}
                </p>
            </div>
        </div>
    )
}

export default ContactDetailRow;