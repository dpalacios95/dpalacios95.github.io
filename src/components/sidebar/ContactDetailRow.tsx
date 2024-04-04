import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";


const ContactDetailRow = ({ fieldName, data, iconDef, addBorder }: { fieldName: string, data: string, iconDef: IconDefinition, addBorder: boolean }) => {
    const [isScreenMobileSize, setisScreenMobileSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const screenWidthThreshold = 640;
            setisScreenMobileSize(window.innerWidth <= screenWidthThreshold);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`contact-detail my-auto sm:flex items-center ${addBorder ? 'border-solid border-gray-200 border-b-2' : ''}`}>
            <div className={`contact-detail-icon mx-10 ${isScreenMobileSize ? "hidden" : ""}`}>
                <FontAwesomeIcon icon={iconDef} className="mx-auto" />
            </div>
            <div className="contact-detail-info-text text-left px-4 py-2">
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