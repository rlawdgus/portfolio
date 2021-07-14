import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";

import "../stylesheets/Contact.scss";

const Contact = () => {
    return (
        <ul className="contact">
            <li>
                <Phone className="contact-icon" /> 010-7205-5570
            </li>
            <li>
                <Mail className="contact-icon" /> kjh557330@gmail.com
            </li>
        </ul>
    );
};

export default Contact;
